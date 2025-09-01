import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import AutenticacaoService from "../../services/AutenticacaoService";

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
            if (resposta.status === 200 && resposta.data.token) {
                localStorage.setItem("usuario", JSON.stringify(resposta.data));
                navigate("/");
            } else {
                alert("Erro ao fazer login");
            }
        } catch (error) {
            console.log(error);
            alert(error.response.data.mensagem);
        }
    };

    return (
        <div className="container">
            <h1>Cadastro de Usuário</h1>
            <label>Primeiro Nome</label>
            <InputText
                value={usuario.nome}
                name="nome"
                onChange={handleChange}
            />
            <label>Email</label>
            <InputText
                value={usuario.email}
                name="email"
                onChange={handleChange}
            />
            <label>Senha</label>
            <InputText
                type="password"
                value={usuario.senha}
                name="senha"
                onChange={handleChange} 
            />
            <br />
            <Button label="Cadastrar" onClick={cadastrar} className="p-button-text" />
            <br />
            <Button label="Retornar" onClick={irParaLogin} className="p-button-text" />
        </div>
    );
};

export default CadastroUsuario;