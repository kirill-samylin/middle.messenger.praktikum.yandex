import { compileTemplate } from '../../utils/Handlebars';
import { Block } from '../../modules/Block';
import { headerTmpl } from './header.tmpl';

const linkActive = (href:string): string => {
  if (`/${href}` === window.location.pathname) {
    return 'header__link_active';
  } else {
    return '';
  }
}

const headerOptions: object = {
  firstname: 'Кирилл',
  lastname: 'Самылин',
  avatar: 'https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg',
  links: [
    { active: linkActive('index.html') || linkActive('message.html'), link: 'index.html', text: 'Сообщения' },
    { active: linkActive('profile.html'), link: 'profile.html', text: 'Профиль' },
    { active: linkActive('auth.html'), link: 'auth.html', text: 'Выход' },
  ]
}

class Header extends Block {
  constructor(props: {}, tmpl: string) {
    super(props, tmpl);
  }
  public render(): Function {
    return compileTemplate(this.tmpl);
  }
}
export const header = new Header(headerOptions, headerTmpl);  