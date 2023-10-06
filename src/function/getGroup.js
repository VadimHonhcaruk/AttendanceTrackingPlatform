export const getGroup = (email, PATH, TOKEN, AUTH) => {
    return fetch((`${PATH}/teacher-groups?email=${encodeURIComponent(email)}`), {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'X-Token': TOKEN,
            'Authorization': AUTH
        },
        mode: 'cors'
    })
}
