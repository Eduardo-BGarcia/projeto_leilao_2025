import React, { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import AutenticacaoService from "../../services/AutenticacaoService";
import './CadastroUsuario.css';
import { Toast } from 'primereact/toast';

const CadastroUsuario = () => {
    const autenticacaoService = new AutenticacaoService();
    const [usuario, setUsuario] = useState({ nome: "", email: "", senha: "" });
    const navigate = useNavigate();
    const toast = useRef(null);

    const handleChange = (e) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value });
    };

    const irParaLogin = () => {
        navigate("/login");
    };

    const cadastrar = async () => {
        try {
            const resposta = await autenticacaoService.salvar(usuario);
            
            if (resposta.status === 200) {
                toast.current.show({
                    severity: 'success',
                    summary: 'Sucesso',
                    detail: 'Usuário cadastrado com sucesso!',
                    life: 5000
                });
            
                setTimeout(() => {
                    navigate("/login");
                }, 1500);

            } else {
                alert("Erro");
            }
        } catch (error) {
            console.log(error);
            toast.current.show({
                severity: 'error',
                summary: 'Erro',
                detail: error.response?.data?.mensagem || "Erro ao cadastrar usuário.",
                life: 5000
            });
        }
    };

    return (
        <div className="container-superior-cadastro">
            <Toast ref={toast} />
            <div className="form-section f-fundo">
                <h1>Cadastro de Usuário</h1>
            
            <div className="input-group">
                <label>Primeiro Nome</label>
                <InputText
                    value={usuario.nome}
                    name="nome"
                    onChange={handleChange}/>
            </div>

            <div className="input-group">
                <label>Email</label>
                <InputText
                    value={usuario.email}
                    name="email"
                    onChange={handleChange}/>
            </div>
            
            <div className="input-group">
                <label>Senha</label>
                <InputText
                    type="password"
                    value={usuario.senha}
                    name="senha"
                    onChange={handleChange}/>
            </div>
            
            
            <br />
            <Button label="Cadastrar" onClick={cadastrar} className="p-button-text b-cadastrar" />
            <br />
            <Button label="Retornar" onClick={irParaLogin} className="p-button-text b-retornar" />
            </div>
        </div>
    );
};

export default CadastroUsuario;