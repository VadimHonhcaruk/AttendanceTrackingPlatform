export const getGroupAttendance = async (group, choosenDay, PATH, TOKEN, AUTH) => {
    return await fetch((`${PATH}/group-attendances?endDate=${choosenDay}&groupId=${group}&startDate=${choosenDay}`), {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'X-Token': TOKEN,
            'Authorization': AUTH
        },
        mode: 'cors'
    })
}
