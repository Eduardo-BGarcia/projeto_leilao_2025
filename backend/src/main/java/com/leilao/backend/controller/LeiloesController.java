package com.leilao.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.leilao.backend.dto.LeiloesDTO;
import com.leilao.backend.service.LeiloesService;
import jakarta.validation.Valid;
import java.net.URI;

@RestController
@RequestMapping("/cadastro-leiloes")
public class LeiloesController {

    @Autowired
    private LeiloesService leiloesService;

    @GetMapping
    public ResponseEntity<Page<LeiloesDTO>> buscarTodos(Pageable pageable) {
        Page<LeiloesDTO> leiloes = leiloesService.buscarTodos(pageable);
        return ResponseEntity.ok(leiloes);
    }

    @GetMapping("/{id}")
    public ResponseEntity<LeiloesDTO> buscarPorId(@PathVariable Long id) {
        LeiloesDTO dto = leiloesService.buscarPorId(id);
        return ResponseEntity.ok(dto);
    }

    // Retorna o status 201 Created com a localização do novo recurso
    @PostMapping
    public ResponseEntity<LeiloesDTO> inserir(@Valid @RequestBody LeiloesDTO dto) {
        dto = leiloesService.inserir(dto);
        URI uri = URI.create("/leiloes/" + dto.getId());
        return ResponseEntity.created(uri).body(dto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<LeiloesDTO> alterar(@PathVariable Long id, @Valid @RequestBody LeiloesDTO dto) {
        dto = leiloesService.alterar(id, dto);
        return ResponseEntity.ok(dto);
    }

    // Retorna o status 204 No Content, padrão para DELETE bem-sucedido
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable Long id) {
        leiloesService.excluir(id);
        return ResponseEntity.noContent().build();
    }
}