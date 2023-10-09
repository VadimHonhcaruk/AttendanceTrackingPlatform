export const getNote = (groupId, lessonDate, PATH, TOKEN, AUTH) => {
    return fetch((`${PATH}/notes?groupId=${groupId}&lessonDate=${lessonDate}`), {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'X-Token': TOKEN,
            'Authorization': AUTH
        },
        mode: 'cors'
    })
}
