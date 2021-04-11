import { compileTemplate } from '../../utils/Handlebars';
import { chatNavTmpl } from './chatNav.tmpl';
import { isChatList }  from '../../utils/isChatList/isChatList';
import { Block } from '../../modules/Block';

import user2 from '../../../static/img/user2.png';

export const chatNavOptions: object = {
  chatlist: isChatList(),
  chatname: 'Виктор',
  chatava: user2
};

class ChatNav extends Block {
  constructor(props: {}, tmpl: string) {
    super(props, tmpl);
  }
  public render(): Function {
    return compileTemplate(this.tmpl);
  }
}
export const chatNav = new ChatNav(chatNavOptions, chatNavTmpl); 