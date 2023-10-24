export const getGroups = (PATH, TOKEN, AUTH) => {
    return fetch((`${PATH}/groups`), {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'X-Token': TOKEN,
            'Authorization': AUTH
        },
        mode: 'cors'
    })
}
