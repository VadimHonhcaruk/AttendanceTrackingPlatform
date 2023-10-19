export const getRepresentive = (PATH, TOKEN, AUTH) => {
    return fetch((`${PATH}/studentrepresentatives`), {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'X-Token': TOKEN,
            'Authorization': AUTH
        },
        mode: 'cors'
    })
}
