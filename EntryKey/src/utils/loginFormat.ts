export const validatePassword = (password: string) => {
    const regex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?\\\/]).{8,}$/;
    return regex.test(password);
}