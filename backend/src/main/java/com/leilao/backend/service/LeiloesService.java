package com.leilao.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import com.leilao.backend.dto.LeiloesDTO;
import com.leilao.backend.exception.NaoEncontradoExcecao;
import com.leilao.backend.model.Leiloes;
import com.leilao.backend.repository.LeiloesRepository;

@Service
public class LeiloesService {

    @Autowired
    private LeiloesRepository leiloesRepository;

    @Autowired
    private MessageSource messageSource;

    public LeiloesDTO inserir(LeiloesDTO dto) {
        Leiloes leilao = new Leiloes();
        copyDtoToEntity(dto, leilao);
        leilao = leiloesRepository.save(leilao);
        return new LeiloesDTO(leilao);
    }

    public LeiloesDTO alterar(Long id, LeiloesDTO dto) {
        Leiloes leilaoBanco = buscarEntidadePorId(id);
        copyDtoToEntity(dto, leilaoBanco);
        leilaoBanco = leiloesRepository.save(leilaoBanco);
        return new LeiloesDTO(leilaoBanco);
    }

    public void excluir(Long id) {
        Leiloes leilaoBanco = buscarEntidadePorId(id);
        leiloesRepository.delete(leilaoBanco);
    }

    public LeiloesDTO buscarPorId(Long id) {
        Leiloes leilao = buscarEntidadePorId(id);
        return new LeiloesDTO(leilao);
    }
    
    private Leiloes buscarEntidadePorId(Long id) {
        return leiloesRepository.findById(id)
            .orElseThrow(() -> new NaoEncontradoExcecao(messageSource.getMessage("leiloes.notfound",
                new Object[] { id }, LocaleContextHolder.getLocale())));
    }

    public Page<LeiloesDTO> buscarTodos(Pageable pageable) {
        Page<Leiloes> leiloesPage = leiloesRepository.findAll(pageable);
        return leiloesPage.map(LeiloesDTO::new);
    }
    
    private void copyDtoToEntity(LeiloesDTO dto, Leiloes entity) {
        entity.setNome(dto.getNome());
        entity.setPreco(dto.getPreco());
        entity.setDataInicio(dto.getDataInicio());
        entity.setDataFim(dto.getDataFim());
    }
}

