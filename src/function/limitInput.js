export function limitInputLength(inputElement) {
    if (inputElement.target.value.length > 4) {
        inputElement.target.value = inputElement.target.value.slice(0, 4);
    }
}