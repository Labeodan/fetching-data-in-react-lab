const BASE_URL = "https://swapi.dev/api/starships"

export const index = async () => {
    try {
        const res = await fetch(BASE_URL)
        const data = await res.json()
        return data
    } catch (error) {
        return error
    }

}


export const search = async (query) => {
    try {
        const res = await fetch(`${BASE_URL}q=${query}`)
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

