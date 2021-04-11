import { validate } from '../../utils/validate';

type TInput = { target: HTMLInputElement };

interface DOMEvent<T extends EventTarget> extends Event {
    target: T
}

function handleForm(input: HTMLInputElement) {
    const form = input.closest("form");
    if (!form) return;
    const button = form.querySelector("#button-form");
    if (!button) return;
    const error = form.querySelector(".popup__error_active");
    if (error || !form.checkValidity()) {
        button.classList.add("popup__button_disabled");
        button.setAttribute("disabled", "true")
    } else {
        button.classList.remove("popup__button_disabled");
        button.removeAttribute('disabled');
    }
}

function handleValidate(e: DOMEvent<HTMLInputElement>) {
    const input = e.target;
    handleForm(input);
    const isValid = validate(input);
    const msgValid = input.validationMessage;
    const errorElement = document.querySelector(`#error-${input.id}`);
    if (isValid && input.value) { 
        input.classList.remove('popup__input_error');
        input.classList.add('popup__input_success');
        if (errorElement) {
            errorElement.classList.remove('popup__error_active');
            errorElement.textContent = '';
        }
    } else {
        if (errorElement) {
            errorElement.textContent = msgValid || input?.dataset?.msg || input.placeholder || '';
            errorElement.classList.add('popup__error_active');
        }
        input.classList.remove('popup__input_success');
        input.classList.add('popup__input_error');
    }
}

function handleSignUp(e: HTMLFormElement):void  {
    e.preventDefault();
    const formData = new FormData(e.form);
    console.log({
        first_name: formData.get('name'),
        second_name: formData.get('lastname'),
        phone: formData.get('tel'),
        email: formData.get('email'),
        login: formData.get('login'),
        password: formData.get('password'),
        passwordend: formData.get('passwordend')
    });
}
function handleSignIn(e: HTMLFormElement):void {
    e.preventDefault();
    const formData = new FormData(e.form);
    console.log({
      login: formData.get('login'),
      password : formData.get('password')
    });
}

function handleFocus(e: TInput):void {
    const input = e.target;
    input.addEventListener('input', handleValidate);
}
function handleBlur(e: TInput):void {
    const input = e.target;
    input.removeEventListener('input', handleValidate);
}

export const signUpEvents = [
    { 
        name: 'submit',
        selector: 'form',
        cb: (event: HTMLFormElement) => {
            handleSignUp(event);
        }
    },
    { 
        name: 'focus',
        selector: '#email',
        cb: (event: TInput) => {
            handleFocus(event);
        }
    },
    { 
        name: 'blur',
        selector: '#email',
        cb: (event: TInput) => {
            handleBlur(event);
        }
    },
    { 
        name: 'focus',
        selector: '#login',
        cb: (event: TInput) => {
            handleFocus(event);
        }
    },
    { 
        name: 'blur',
        selector: '#login',
        cb: (event: TInput) => {
            handleBlur(event);
        }
    },
    { 
        name: 'focus',
        selector: '#name',
        cb: (event: TInput) => {
            handleFocus(event);
        }
    },
    { 
        name: 'blur',
        selector: '#name',
        cb: (event: TInput) => {
            handleBlur(event);
        }
    },
    { 
        name: 'focus',
        selector: '#lastname',
        cb: (event: TInput) => {
            handleFocus(event);
        }
    },
    { 
        name: 'blur',
        selector: '#lastname',
        cb: (event: TInput) => {
            handleBlur(event);
        }
    },
    { 
        name: 'focus',
        selector: '#tel',
        cb: (event: TInput) => {
            handleFocus(event);
        }
    },
    { 
        name: 'blur',
        selector: '#tel',
        cb: (event: TInput) => {
            handleBlur(event);
        }
    },
    { 
        name: 'focus',
        selector: '#password',
        cb: (event: TInput) => {
            handleFocus(event);
        }
    },
    { 
        name: 'blur',
        selector: '#password',
        cb: (event: TInput) => {
            handleBlur(event);
        }
    },
    { 
        name: 'focus',
        selector: '#passwordend',
        cb: (event: TInput) => {
            handleFocus(event);
        }
    },
    { 
        name: 'blur',
        selector: '#passwordend',
        cb: (event: TInput) => {
            handleBlur(event);
        }
    },
];
export const signInEvents = [
    { 
        name: 'submit',
        selector: 'form',
        cb: (event: HTMLFormElement) => {
            handleSignIn(event);
        }
    },
    { 
        name: 'focus',
        selector: '#login',
        cb: (event: TInput) => {
            handleFocus(event);
        }
    },
    { 
        name: 'blur',
        selector: '#login',
        cb: (event: TInput) => {
            handleBlur(event);
        }
    },
    { 
        name: 'focus',
        selector: '#password',
        cb: (event: TInput) => {
            handleFocus(event);
        }
    },
    { 
        name: 'blur',
        selector: '#password',
        cb: (event: TInput) => {
            handleBlur(event);
        }
    },
];