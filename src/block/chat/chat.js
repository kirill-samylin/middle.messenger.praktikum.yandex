import { compileTemplate } from '../../modules/templator';
import { chatTmpl } from './chat.tmpl';
import { chatNavOptions, chatNav } from '../../components/chatNav';
import { chatListOptions, chatList } from '../../components/chatList';
import { chatMessageOptions, chatMessage } from '../../components/chatMessage';
import { message } from '../message';

import isChatList from '../../utils/isChatList';

export const chatOptions = {
  navigation: chatNav(chatNavOptions),
  main: (isChatList()) ? chatList(chatListOptions) : chatMessage(chatMessageOptions),
  message: (isChatList()) ? '' : message({}),
};

export const chat = compileTemplate(chatTmpl);