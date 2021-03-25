import { compileTemplate } from '../../modules/templator';
import { chatNavTmpl } from './chatNav.tmpl';
import isChatList from '../../utils/isChatList';

import user2 from '../../../static/img/user2.png';

export const chatNavOptions = {
  chatlist: isChatList(),
  chatname: 'Виктор',
  chatava: user2
};

export const chatNav = compileTemplate(chatNavTmpl);