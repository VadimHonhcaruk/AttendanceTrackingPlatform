export const onlyNumb = e => {
    e.target.value = e.target.value.replace(/\D/g, '');
};