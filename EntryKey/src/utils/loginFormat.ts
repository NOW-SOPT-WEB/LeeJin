export const validatePassword = (password: string) => {
    const regex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?\\\/]).{8,}$/;
    return regex.test(password);
}

export const validatePhone = (phone: string) => {
    const regex = /^010-\d{4}-\d{4}$/;
    return regex.test(phone);
}