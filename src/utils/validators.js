export const required = (value) => {
    if (value) return undefined;

    return 'Field required'

}
export const maxLength30 = (value) => {
    if (value.length > 30) return "max length is 30 symbols";

    return undefined

}