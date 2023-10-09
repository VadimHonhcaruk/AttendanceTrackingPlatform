export const postNote = (groupId, lessonDate, note, PATH, TOKEN, AUTH) => {
    return fetch((`${PATH}/note`), {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'X-Token': TOKEN,
            'Authorization': AUTH,
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify({
            'groupId': groupId,
            'lessonDate': lessonDate,
            'text': note,
        })
    })
}
