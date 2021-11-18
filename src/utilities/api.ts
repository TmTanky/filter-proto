const BASE_URL = 'http://localhost:3333/api'
const config = {
    headers: {
        accept: "*/*",
        "Content-Type": "application/x-www-form-urlencoded"
    },
}
export const fetchMovies = async () => {
    try {
        const response = await fetch(`${BASE_URL}/movies/`, config)
        return response.json()
    } catch (err) {
        console.log(err)
    }
}
export const fetchFacets = async () => {
    try {
        const response = await fetch('http://localhost:3333/api/facets/', {
            headers: {
                Accept: 'application/json',
            },
        });
        return response.json()
    } catch (err) {
        console.log(err)
    }
}
export const fetchMoviesJSON = async () => {
    const response = await fetch('c.json', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    return response.json()
}
export const fetchFacetsJSON = async () => {
    const response = await fetch('b.json', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    return response.json()
}
export const updateWatchedOrSavedAsync = async (id: string, saved: any, watched: any) => {
    try {
        const response = await fetch(`${BASE_URL}/movies/id/${id}`, {
            body: new URLSearchParams({
                saved,
                watched,
            }),
            headers: {
                Accept: "*/*",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "PUT"
        })
        return response.status
    } catch (err) {
        console.log(err)
    }
}
