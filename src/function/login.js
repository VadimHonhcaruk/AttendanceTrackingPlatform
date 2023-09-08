export const loginFunc = (email, password, setPage) => {
    if (email !== '' && password !== '') {
        setPage(3);
        return;
    }
}
