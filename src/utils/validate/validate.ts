function validateEmail(email: string):boolean {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function validatePhone(phone: string):boolean {
    const re = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    return re.test(phone);
}

export function validate(input: HTMLInputElement):boolean {
    const { value, id } = input; 
    if (id==="email") {
        return validateEmail(value);
    }
    if (id==="tel") {
        return validatePhone(value);
    }
    if (id==="passwordend") {
        const password: HTMLInputElement | undefined | null = input.closest("form")?.querySelector("#password");
        return value===password?.value
    }
    return input.validity.valid
}