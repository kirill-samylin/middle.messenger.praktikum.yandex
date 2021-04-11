import { header } from '../block/header';
import { profile } from '../block/profile';

function render(query:string) {
  const root: any = document.querySelector(query);
  root.innerHTML = `
  ${header.getContent()}
  ${profile.getContent()}`;
}

render("#root");