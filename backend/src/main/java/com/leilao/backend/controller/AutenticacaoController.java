package com.leilao.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.leilao.backend.dto.PessoaAutenticacaoDTO;
import com.leilao.backend.dto.PessoaDTO;
import com.leilao.backend.service.AutenticacaoService;

@RestController
@RequestMapping("/autenticacao")
public class AutenticacaoController {

    @Autowired
    private AutenticacaoService autenticacaoService;

    @PostMapping("/login")
    public ResponseEntity<PessoaAutenticacaoDTO> login(@RequestBody PessoaDTO pessoaRequisicaoDTO) {
        return  ResponseEntity.ok(autenticacaoService.autenticar(pessoaRequisicaoDTO));
    }

    @PostMapping("/cadastro-usuario")
    public ResponseEntity<PessoaDTO> cadastro(@RequestBody PessoaDTO pessoa) {
        return  ResponseEntity.ok(autenticacaoService.salvar(pessoa));
    }
}
