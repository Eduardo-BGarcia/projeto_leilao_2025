import BaseService from "./BaseService";


class AutenticacaoService extends BaseService{

    constructor(){
        super("/autenticacao");
    }

    async login(dados){
        const resposta = await this.api.post(`${this.endPoint}/login`, dados);
        return resposta;
    }

    async salvar(dados){
        const resposta = await this.api.post(`${this.endPoint}/cadastro`, dados);
        return resposta;
    }
}
export default AutenticacaoService;