import { compileTemplate } from '../../utils/Handlebars';
import { chatTmpl } from './chat.tmpl';
import { chatNav } from '../../components/chatNav';
import { chatList } from '../../components/chatList';
import { chatMessage } from '../../components/chatMessage';
import { message } from '../message';
import { Block } from '../../modules/Block';

import { isChatList }  from '../../utils/isChatList/isChatList';

export const chatOptions: object = {
  navigation: chatNav.getContent(),
  main: (isChatList()) ? chatList.getContent() : chatMessage.getContent(),
  message: (isChatList()) ? '' : message.getContent(),
};

class Chat extends Block {
  constructor(props: {}, tmpl: string) {
    super(props, tmpl);
  }
  public render(): Function {
    return compileTemplate(this.tmpl);
  }
}
export const chat = new Chat(chatOptions, chatTmpl);  