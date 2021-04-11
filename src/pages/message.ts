import { header } from '../block/header';
import { chat } from '../block/chat';
function render(query:string) {
  const root: any = document.querySelector(query);
  root.innerHTML = `
    ${header.getContent()}
    ${chat.getContent()}`;
}

render("#root");