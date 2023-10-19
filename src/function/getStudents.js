export const getStudents = (PATH, TOKEN, AUTH) => {
    return fetch((`${PATH}/students`), {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'X-Token': TOKEN,
            'Authorization': AUTH
        },
        mode: 'cors'
    })
}
