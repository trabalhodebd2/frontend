const urlApi = "https://servicodados.ibge.gov.br/api/v1/localidades"

export const getCountry = async () => {
    const obj = await fetch(`${urlApi}/estados`)
        .then(res => res.json())
        .catch(() => alert("Ocorreu um error ao carregar dados, recarrege a pagina"))
    
    return obj
}

export const getCity = async (uf) => {
    const obj = await fetch(`${urlApi}/estados/${uf}/municipios`)
        .then(res => res.json())
        .catch(() => alert("Ocorreu um error ao carregar dados, recarrege a pagina"))
    
    return obj
}