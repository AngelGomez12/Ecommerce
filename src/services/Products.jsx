const API_URL = process.env.REACT_APP_API_URL;


export const getProducts = async () => {
    const response = await fetch(`${API_URL}products`)
    const data = await response.json()
    return data
}