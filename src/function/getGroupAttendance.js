export const getGroupAttendance = async (group, startDay, PATH, TOKEN, AUTH, endDay = startDay) => {
    return await fetch((`${PATH}/group-attendances?endDate=${endDay}&groupId=${group}&startDate=${startDay}`), {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'X-Token': TOKEN,
            'Authorization': AUTH
        },
        mode: 'cors'
    })
}
