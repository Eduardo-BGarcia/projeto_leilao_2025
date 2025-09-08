package com.leilao.backend.dto;

import java.time.LocalDate;
import java.util.Date;

import com.leilao.backend.model.Leiloes;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LeiloesDTO {
    private Long id;
    private String nome;
    private Double preco;
    private LocalDate dataInicio;
    private LocalDate dataFim;
    private String foto;
    private Boolean excluido = false;
    private Date DataExclusao;
    private Date DataCriacao = new Date();
    private Date DataAtualizacao;

    public LeiloesDTO(Leiloes entity) {
        this.id = entity.getId();
        this.nome = entity.getNome();
        this.preco = entity.getPreco();
        this.dataInicio = entity.getDataInicio();
        this.dataFim = entity.getDataFim();
        this.foto = entity.getFoto();
        this.excluido = entity.getExcluido();
        this.DataExclusao = entity.getDataExclusao();
        this.DataCriacao = entity.getDataCriacao();
        this.DataAtualizacao = entity.getDataAtualizacao();
    }
}
