import { compileTemplate } from '../../modules/templator';
import { errorTmpl } from './error.tmpl';

export const errorOptions404 = {
  code: { tag: 'h1', text: '404', class: 'error__title' },
  text: { tag: 'p', text: 'Запрашиваемая Вами страница не найдена.', class: 'error__paragraph' },
  link: { tag: 'a', text: 'Вернуться назад', class: 'error__link', href: 'index.html' },
};
export const errorOptions500 = {
  code: { tag: 'h1', text: '500', class: 'error__title' },
  text: { tag: 'p', text: 'Мы уже фиксим', class: 'error__paragraph' },
  link: { tag: 'a', text: 'Вернуться назад', class: 'error__link', href: 'index.html' },
};

export const error404 = compileTemplate(errorTmpl);
export const error500 = compileTemplate(errorTmpl);