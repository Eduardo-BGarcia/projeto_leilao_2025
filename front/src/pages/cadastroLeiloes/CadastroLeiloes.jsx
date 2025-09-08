import './CadastroLeiloes.css';
import React, { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import { Toast } from 'primereact/toast';
import Header from '../../components/header/Header';
import LeiloesService from "../../services/LeiloesService";

const CadastroLeiloes = () => {
    const leiloesService = new LeiloesService();
    const [leilao, setLeilao] = useState({ nome: "", preco: "", dataInicio: "", dataFim: "" });
    const navigate = useNavigate();
    const toast = useRef(null);

    const handleChange = (e) => {
        setLeilao({ ...leilao, [e.target.name]: e.target.value });
    };

    const irParaHome = () => {
        navigate("/home");
    };

    const cadastrar = async () => {
        try {
            const resposta = await leiloesService.salvar(leilao);
            
            if (resposta.status === 201) {
                toast.current.show({
                    severity: 'success',
                    summary: 'Sucesso',
                    detail: 'Leilão cadastrado com sucesso!',
                    life: 4000
                });
            
                setTimeout(() => {
                    navigate("/home");
                }, 1500);

            } else {
                toast.current.show({
                    severity: 'warn',
                    summary: 'Atenção',
                    detail: 'Ocorreu um erro inesperado.',
                    life: 5000
                });
            }
        } catch (error) {
            console.log(error);
            toast.current.show({
                severity: 'error',
                summary: 'Erro',
                detail: error.response?.data?.message || "Erro ao cadastrar leilão.",
                life: 5000
            });
        }
    };

    return (
        <>
            <Header />
            <div className="container-superior-cadastro">
                <Toast ref={toast} />
                <div className="form-section f-fundo">
                    <h1>Cadastro de Leilões</h1>
                
                    <div className="input-group">
                        <label>Nome</label>
                        <InputText value={leilao.nome} name="nome" onChange={handleChange}/>
                    </div>

                    <div className="input-group">
                        <label>Preço R$</label>
                        <InputText value={leilao.preco} name="preco" onChange={handleChange}/>
                    </div>
                    
                    <div className="input-group">
                        <label>Data de Início</label>
                        <InputText value={leilao.dataInicio} name="dataInicio" onChange={handleChange}/>
                    </div>

                    <div className="input-group">
                        <label>Data de Término</label>
                        <InputText value={leilao.dataFim} name="dataFim" onChange={handleChange}/>
                    </div>
                    
                    <br />
                    <Button label="Cadastrar" onClick={cadastrar} className="p-button-text b-cadastrar" />
                    <br />
                    <Button label="Retornar" onClick={irParaHome} className="p-button-text b-retornar" />
                </div>
            </div>
        </>
    );
};

export default CadastroLeiloes;