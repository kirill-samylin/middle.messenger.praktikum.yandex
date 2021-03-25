import { compileTemplate } from '../../modules/templator';
import { profileTmpl } from './profile.tmpl';

export const profileOptions = {
  firstname: 'Кирилл',
  lastname: 'Самылин',
  login: 'ivanivanov',
  avatar: 'https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg',
  email: 'pochta@yandex.ru',
  tel: '+7 (909) 967 30 30',
};

export const profile = compileTemplate(profileTmpl);