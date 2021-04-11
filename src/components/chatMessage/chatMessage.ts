import { compileTemplate } from '../../utils/Handlebars';
import { chatMessageTmpl } from './chatMessage.tmpl';
import { Block } from '../../modules/Block';

import user2 from '../../../static/img/user2.png';

export const chatMessageOptions: object = {
  intervals: [
    {
      date: 'Вчера',
      messages: [
        {
          time: '12:00',
          firstname: 'Кирилл',
          lastname: 'Самылин',
          avatar: 'https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg',
          text: 'Привет, как дела?',
        },
        {
          time: '12:01',
          firstname: 'Виктор',
          lastname: '',
          avatar: user2,
          text: 'Привет, хорошо.',
        },
        {
          time: '12:01',
          firstname: 'Кирилл',
          lastname: 'Самылин',
          avatar: 'https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg',
          text: 'Видос прикольный https://www.youtube.com/',
        },
        {
          time: '12:05',
          firstname: 'Виктор',
          lastname: '',
          avatar: user2,
          text: 'угар))',
        },
        {
          time: '12:05',
          firstname: 'Виктор',
          lastname: '',
          avatar: user2,
          text: 'репчик кстати нормально зачитал)())))',
        },
      ]
    },
  ],
};

class ChatMessage extends Block {
  constructor(props: {}, tmpl: string) {
    super(props, tmpl);
  }
  public render(): Function {
    return compileTemplate(this.tmpl);
  }
}
export const chatMessage = new ChatMessage(chatMessageOptions, chatMessageTmpl);  