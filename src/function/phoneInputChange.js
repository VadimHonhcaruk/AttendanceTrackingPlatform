export const inputChange = e => {
    const x = e.target.value.replace(/\D/g, '').match(/(\d{0,5})(\d{0,3})(\d{0,2})(\d{0,2})/);
    e.target.value = !x[2] ? '+' + x[1] : '+38 (' + x[1][2] + x[1][3] + x[1][4] + ') ' + x[2] + (x[3] ? ' ' + x[3] : '') + (x[4] ? ' ' + x[4] : '');
};

export const onfocusInput = e => {
    if (e.target.value === '') {
        e.target.value = '+38';
    }
};

export const onblurInput = e => {
    if (e.target.value === '+38') {
        e.target.value = '';
    }
};