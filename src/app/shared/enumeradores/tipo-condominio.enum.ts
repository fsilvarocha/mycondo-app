export enum TipoCondonminioEnum{
    Residencial = 0,
    Comercial = 1,
    ResidencialComercial = 2
}

export const TipoCondonminioEnumDescricao:{
    [key in TipoCondonminioEnum]:string
}={
    [TipoCondonminioEnum.Residencial]:"Residencial",
    [TipoCondonminioEnum.Comercial]:"Comercial",
    [TipoCondonminioEnum.ResidencialComercial]:"Residencial e Comercial"
};