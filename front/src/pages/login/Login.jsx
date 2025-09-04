import React, { useState, useRef } from "react";
import './Login.css';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import AutenticacaoService from "../../services/AutenticacaoService";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/banner-login.jpg';
import { Toast } from 'primereact/toast';

const Login = () => {
    const autenticacaoService = new AutenticacaoService();
    const [usuario, setUsuario] = useState({ email: '', senha: '' });
    const navigate = useNavigate();
    const toast = useRef(null);

    const handleChange = (e) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value });
    }

    const irParaCadastro = () => {
        navigate("/cadastro-usuario");
    };

    const login = async () => {
        try {
            const resposta = await autenticacaoService.login(usuario);
            if (resposta.status === 200) {
                toast.current.show({
                    severity: 'success',
                    summary: 'Sucesso',
                    detail: 'Usuário encontrado com sucesso!',
                    life: 5000
                });
            
                setTimeout(() => {
                    navigate("/home");
                }, 1500);
            } else {
                alert("Usuário não cadastrado.");
            }
        } catch (error) {
            console.error(error);
            toast.current.show({
                severity: 'error',
                summary: 'Erro',
                detail: error.response?.data?.mensagem || "Usuário não cadastrado!",
                life: 5000
            });
        }
    }

    return (
        <div className="container-superior">
            <Toast ref={toast} />
            <div className="container">
                
                <div className="image-section">
                    <img src={logo} alt="Logo da Empresa" />
                </div>

                <div className="form-section f-fundo">
                    <h1>Bem-vindo de volta!</h1>
                    <p>Faça login para continuar</p>

                    <div className="input-group">
                        <label>Email</label>
                        <InputText value={usuario.email} name="email" onChange={handleChange} />
                    </div>

                    <div className="input-group">
                        <label>Senha</label>
                        <Password value={usuario.senha} name="senha" onChange={handleChange} feedback={false} />
                    </div>
                    
                    <Button label="Entrar" onClick={login} className="p-button-primary b-entrar" />
                    
                    <div className="separator">
                        <p>Não tem uma conta?</p>
                    </div>
                    
                    <Button label="Cadastre-se" onClick={irParaCadastro} className="p-button-secondary b-cadastrar" />

                </div>
            </div>
        </div>
    );
}
export default Login;