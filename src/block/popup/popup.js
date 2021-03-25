import { compileTemplate } from '../../modules/templator';
import { signUpTmpl, signInTmpl } from './popup.tmpl';

function handleSignUp() {
  const form = document.querySelector('#regisration');
  const first_name = form.querySelector('#name').value;
  const second_name = form.querySelector('#lastname').value;
  const phone = form.querySelector('#tel').value;
  const email = form.querySelector('#email').value;
  const login = form.querySelector('#login').value;
  const password = form.querySelector('#password').value;
  const passwordend = form.querySelector('#passwordend').value;
  console.log({
    first_name,
    second_name,
    phone,
    email,
    login,
    password,
    passwordend
  });
}
function handleSignIn() {
  const form = document.querySelector('#auth');
  const login = form.querySelector('#login').value;
  const password = form.querySelector('#password').value;
  console.log({
    login,
    password
  });
}
export const signUpOptions = {
  title: 'Регистрация',
  link: 'Войти',
  url: 'index.html',
  error: 'Пароли не совпадают',
  button: 'Зарегистрироваться',
  submit: handleSignUp,
  buttontest: { tag: 'button', text: 'Зарегистрироваться',  class: 'popup__button', type: 'button', event: { name: 'click', fn: handleSignUp } }
};

export const signInOptions = {
  title: 'Вход',
  link: 'Регистрация',
  url: 'registration.html',
  error: 'Не правельный логин или пароль',
  button: 'Авторизоваться',
  submit: handleSignIn,
  buttontest: { tag: 'button', text: 'Авторизоваться', class: 'popup__button', type: 'button', event: { name: 'click', fn: handleSignIn } }
};

export const signUp = compileTemplate(signUpTmpl);
export const signIn = compileTemplate(signInTmpl);