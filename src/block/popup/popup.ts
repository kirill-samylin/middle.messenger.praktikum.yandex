import { compileTemplate } from '../../utils/Handlebars';
import { Block } from '../../modules/Block';
import { signUpTmpl, signInTmpl } from './popup.tmpl';
import { signUpEvents, signInEvents } from './events';

const signUpOptions: {} = {
  title: 'Регистрация',
  link: 'Войти',
  url: 'index.html',
  error: 'Пароли не совпадают',
  button: 'Зарегистрироваться',
  events: signUpEvents
};

const signInOptions: {} = {
  title: 'Вход',
  link: 'Регистрация',
  url: 'registration.html',
  error: 'Не правельный логин или пароль',
  button: 'Авторизоваться',
  events: signInEvents
};

class Popup extends Block {
  constructor(props: {}, tmpl: string) {
    super(props, tmpl);
  }
  public render(): Function {
    return compileTemplate(this.tmpl);
  }
}
export const signUp = new Popup(signUpOptions, signUpTmpl);  
export const signIn = new Popup(signInOptions, signInTmpl);  