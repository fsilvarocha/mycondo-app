import { TipoCondonminioEnum } from "src/app/shared/enumeradores/tipo-condominio.enum";

export interface CondominiosResponse{

    id : number;
    tenante : string;
    cnpj : string;
    nome : string;
    tipoCondominio : TipoCondonminioEnum;
    logo:string;
    areaTotal:number;
    cep : string;
    cidade : string;
    uf:string;
    bairro : string;
    logradouro: string;
    numero : string;    
    complemento: string;
    tipoCondominioDescricao: string;
}