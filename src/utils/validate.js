export const checkValidData = (email,pass) => {
    const isEmailValid = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
    const isPassValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(pass)

    if(!isEmailValid) return "Email is not valid"
    if(!isPassValid) return "password is not valid"
    // if this function returns null then it means that no errors
    return null;

}