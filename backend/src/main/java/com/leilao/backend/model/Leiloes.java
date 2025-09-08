package com.leilao.backend.model;

import java.time.LocalDate; // CORREÇÃO: Usar tipo apropriado para datas
import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Entity
@Data
@Table(name = "leiloes")
public class Leiloes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "{validation.name.notblank}")
    private String nome;
    private Double preco;
    private LocalDate dataInicio;
    private LocalDate dataFim;
    private String foto;
    private Boolean excluido = false;
    private Date DataExclusao;
    private Date DataCriacao = new Date();
    private Date DataAtualizacao;
}