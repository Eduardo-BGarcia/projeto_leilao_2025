import BaseService from "./BaseService";

class LeiloesService extends BaseService{

    constructor(){
        super("/cadastrar-leiloes");
    }
    
    async salvar(dados){
        const resposta = await this.api.post(`${this.endPoint}/cadastro-leilao`, dados);
        return resposta;
    }
}

export default LeiloesService;