
export const creatUser = async (user) => {
    const response = await fetch(`https://api.escuelajs.co/api/v1/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    const data = await response.json()
    return data
}