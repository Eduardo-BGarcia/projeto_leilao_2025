package com.leilao.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.leilao.backend.model.Leiloes;

public interface LeiloesRepository extends JpaRepository<Leiloes, Long> {
}