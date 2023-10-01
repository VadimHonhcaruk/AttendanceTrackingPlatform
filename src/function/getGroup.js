export const getGroup = (email, PATH, TOKEN, AUTH) => {
    return fetch((`${PATH}/teacher-groups?userEmail=${encodeURIComponent(email)}`), {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'X-Token': TOKEN,
            'Authorization': AUTH
        },
        mode: 'cors'
    })
}
