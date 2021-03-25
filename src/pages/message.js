import { headerOptions, header } from '../block/header';
import { chatOptions, chat } from '../block/chat';
document.getElementById("root").innerHTML = `
  ${header(headerOptions)}
  ${chat(chatOptions)}`;