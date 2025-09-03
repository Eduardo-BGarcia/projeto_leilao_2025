package com.leilao.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.leilao.backend.dto.PessoaAutenticacaoDTO;
import com.leilao.backend.dto.PessoaRequisicaoDTO;
import com.leilao.backend.model.Pessoa;
import com.leilao.backend.repository.PessoaRepository;

@Service
public class AutenticacaoService {

    @Autowired
    private AuthenticationManager authenticationManager;


    @Autowired
    private PessoaRepository pessoaRepository;

    public PessoaAutenticacaoDTO autenticar(PessoaRequisicaoDTO pessoa) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(pessoa.getEmail(), pessoa.getSenha()));

           Pessoa pessoaBanco = pessoaRepository.findByEmail(pessoa.getEmail()).get();

           PessoaAutenticacaoDTO autenticacaoDTO = new PessoaAutenticacaoDTO();
           autenticacaoDTO.setEmail(pessoaBanco.getEmail());
           autenticacaoDTO.setNome(pessoaBanco.getNome());
           autenticacaoDTO.setToken(authentication.getName());


        return autenticacaoDTO;

    }
    
    public PessoaRequisicaoDTO salvar(PessoaRequisicaoDTO pessoa) {
        Pessoa novaPessoa = new Pessoa();
        novaPessoa.setNome(pessoa.getNome());
        novaPessoa.setEmail(pessoa.getEmail());
        novaPessoa.setSenha(pessoa.getSenha());
        pessoaRepository.save(novaPessoa);
        return pessoa;
    }
}
