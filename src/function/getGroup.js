export const getGroup = async (email, PATH, TOKEN, AUTH) => {
    const response = await fetch((`${PATH}/teacher-groups?userEmail=${encodeURIComponent(email)}`), {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'X-Token': TOKEN,
            'Authorization': AUTH
        },
        mode: 'cors'
    })

    const data = await response.json();
    return data;
}
