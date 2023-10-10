export const postAttendance = async (atendance, PATH, TOKEN, AUTH) => {
    return await fetch((`${PATH}/attendance`), {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'X-Token': TOKEN,
            'Authorization': AUTH,
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify({
            'groupId': atendance.groupId,
            'lessonDate': atendance.lessonDate,
            'studentsStatuses': atendance.newAttendanceObject,
        })
    })
}