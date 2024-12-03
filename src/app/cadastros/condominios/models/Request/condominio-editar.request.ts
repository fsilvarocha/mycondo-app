import { TipoCondonminioEnum } from "src/app/shared/enumeradores/tipo-condominio.enum";

export class CondominiosEditarRequest{
    id? : number;
    tenante? : string;
    nome?: string;
    cnpj?: string;
    tipoCondominio?: TipoCondonminioEnum;
    logo?: string;
    areaTotal?: number;
    cep?: string;
    cidade?: string;
    uf?: string;
    bairro?: string;
    logradouro?: string;
    numero?: string;
    complemento?: string;

    constructor(params: Partial<CondominiosEditarRequest>){
        this.id = params.id;
        this.tenante = params.tenante;
        this.nome = params.nome;
        this.cnpj = params.cnpj;
        this.tipoCondominio = params.tipoCondominio ?? TipoCondonminioEnum.Residencial;
        this.logo = params.logo;
        this.areaTotal = params.areaTotal ?? 0;
        this.cep = params.cep;
        this.cidade = params.cidade;
        this.uf = params.uf;
        this.bairro = params.bairro;
        this.logradouro = params.logradouro;
        this.numero = params.numero;
        this.complemento = params.complemento;
    }
}