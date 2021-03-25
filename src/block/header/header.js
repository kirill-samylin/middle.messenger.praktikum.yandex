import { compileTemplate } from '../../modules/templator';
import { headerTmpl } from './header.tmpl';

const linkActive = (href) => {
  if (`/${href}` === window.location.pathname) {
    return 'header__link_active';
  } else {
    return '';
  }
}

export const headerOptions = {
  firstname: 'Кирилл',
  lastname: 'Самылин',
  avatar: 'https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg',
  links: [
    { active: linkActive('index.html') || linkActive('message.html'), link: 'index.html', text: 'Сообщения' },
    { active: linkActive('profile.html'), link: 'profile.html', text: 'Профиль' },
    { active: linkActive('auth.html'), link: 'auth.html', text: 'Выход' },
  ]
}

export const header = compileTemplate(headerTmpl);

//header__link_active