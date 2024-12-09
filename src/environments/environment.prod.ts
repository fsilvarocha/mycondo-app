const PRODHOST = "https://mycondo-administracao.onrender.com";
const LOCALHOST="http://localhost:7230/api/Condominios"

export const environment = {
    production:false,
    config:{
        apis:{
            condominioAPI:PRODHOST
        }
    }
};