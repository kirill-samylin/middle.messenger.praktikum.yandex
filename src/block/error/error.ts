import { Block } from '../../modules/Block';
import { compileTemplate } from '../../utils/Handlebars';
import { errorTmpl } from './error.tmpl';

export const errorOptions404: {} = {
  code: '404',
  text: 'Запрашиваемая Вами страница не найдена.',
  link: 'Вернуться назад',
  href: 'index.html',
};
export const errorOptions500: {} = {
  code: '500',
  text: 'Мы уже фиксим...',
  link: 'Вернуться назад',
  href: 'index.html',
};

class Error extends Block {
  constructor(props: {}, tmpl: string) {
    super(props, tmpl);
  }
  public render() {
    return compileTemplate(this.tmpl);
  }
}

export const error404 = new Error(errorOptions404, errorTmpl);  
export const error500 = new Error(errorOptions500, errorTmpl);  