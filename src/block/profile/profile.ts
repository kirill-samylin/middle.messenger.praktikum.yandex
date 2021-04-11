import { compileTemplate } from '../../utils/Handlebars';
import { profileTmpl } from './profile.tmpl';
import { Block } from '../../modules/Block';

const profileOptions: {} = {
  firstname: 'Кирилл',
  lastname: 'Самылин',
  login: 'ivanivanov',
  avatar: 'https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg',
  email: 'pochta@yandex.ru',
  tel: '+7 (909) 967 30 30',
};

class Profile extends Block {
  constructor(props: {}, tmpl: string) {
    super(props, tmpl);
  }
  public render(): Function {
    return compileTemplate(this.tmpl);
  }
}
export const profile = new Profile(profileOptions, profileTmpl);  