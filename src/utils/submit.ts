import { validateCompany, validateEmail, validateFile, validateMessage, validateName, validatePhone } from "./validate"

export const canSubmit = (
    name:string,
    company:string,
    number:string,
    mail:string,
    message:string,
    file:File | null,
    confirm: boolean,
):boolean => {
    if (!confirm) {
        if (validateName(name) || validateCompany(company) || validatePhone(number) || validateEmail(mail)) {
            // return false
            if (validateMessage(message,file) || validateFile(file, message) )  {
                return false
            }
            return false
        } 
    }
    return true
}