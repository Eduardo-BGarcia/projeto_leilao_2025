package com.leilao.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.leilao.backend.dto.PessoaAutenticacaoDTO;
import com.leilao.backend.dto.PessoaDTO;
import com.leilao.backend.model.Pessoa;
import com.leilao.backend.repository.PessoaRepository;

@Service
public class AutenticacaoService {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private PessoaRepository pessoaRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public PessoaAutenticacaoDTO autenticar(PessoaDTO pessoaRequisicaoDTO) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(pessoaRequisicaoDTO.getEmail(), pessoaRequisicaoDTO.getSenha()));
           Pessoa pessoaBanco = pessoaRepository.findByEmail(pessoaRequisicaoDTO.getEmail()).get();
           PessoaAutenticacaoDTO autenticacaoDTO = new PessoaAutenticacaoDTO();
           autenticacaoDTO.setEmail(pessoaBanco.getEmail());
           autenticacaoDTO.setSenha(authentication.getName());
        return autenticacaoDTO;

    }
    
    public PessoaDTO salvar(PessoaDTO pessoaRequisicaoDTO) {
        Pessoa novaPessoa = new Pessoa();
        novaPessoa.setNome(pessoaRequisicaoDTO.getNome());
        novaPessoa.setEmail(pessoaRequisicaoDTO.getEmail());
        novaPessoa.setSenha(passwordEncoder.encode(pessoaRequisicaoDTO.getSenha()));
        pessoaRepository.save(novaPessoa);
        return pessoaRequisicaoDTO;
    }
}
