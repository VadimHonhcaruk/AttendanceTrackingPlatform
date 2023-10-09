export const getStudentsByGroup = async (groupId, PATH, TOKEN, AUTH) => {
    return await fetch((`${PATH}/enrollees/${groupId}`), {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'X-Token': TOKEN,
            'Authorization': AUTH
        },
        mode: 'cors'
    })
}
