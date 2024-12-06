export function obterEnumPorDescricao<T extends string | number | symbol>(descricao: string, enumDescricao: { [key in T]: string }): T | undefined {
    const key = Object.keys(enumDescricao).find(
      key => enumDescricao[key as unknown as T] === descricao
    );
  
    return key ? (key as unknown as T) : undefined;
  }