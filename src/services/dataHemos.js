import { getHemos } from "./crudHemos"

export const getHemosByCity = async(city) => {
    const hemos = await getHemos()
    const hemosFilter = hemos.filter(elem => {
        return elem.properties.city.toLowerCase() === city.toLowerCase()
    })
    return hemosFilter
}

export const getHemosByUf = async (uf) => {
    const hemos = await getHemos()
    const hemosFilter = hemos.filter(elem => {
        return elem.properties.uf.toLowerCase() === uf.toLowerCase()
    })
    return hemosFilter
}