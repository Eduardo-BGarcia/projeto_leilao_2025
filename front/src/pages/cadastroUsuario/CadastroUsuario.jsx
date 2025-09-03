import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import AutenticacaoService from "../../services/AutenticacaoService";
import './CadastroUsuario.css';

const CadastroUsuario = () => {
    const autenticacaoService = new AutenticacaoService();
    const [usuario, setUsuario] = useState({ nome: "", sobrenome: "", email: "", senha: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value });
    };

    const irParaLogin = () => {
        navigate("/login");
    };

    const cadastrar = async () => {
        try {
            const resposta = await autenticacaoService.salvar(usuario);
            console.log(resposta.data);
            console.log(usuario);
            if (resposta.status === 200 && resposta.data.token) {
                localStorage.setItem("usuario", JSON.stringify(resposta.data));
                navigate("/");
            } else {
                alert("Erro ao fazer login");
            }
        } catch (error) {
            console.log(error);
            alert(error.response?.data?.mensagem || "Erro ao cadastrar usuário");
        }
    };

    return (
        <div className="container-superior-cadastro">
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