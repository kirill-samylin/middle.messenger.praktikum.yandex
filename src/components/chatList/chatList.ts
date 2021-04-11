import { compileTemplate } from '../../utils/Handlebars';
import { chatListTmpl } from './chatList.tmpl';
import { Block } from '../../modules/Block';

import user from '../../../static/img/user.png';
import user2 from '../../../static/img/user2.png';
import user3 from '../../../static/img/user3.png';
import user4 from '../../../static/img/user4.png';

const chatListOptions: object = {
  list: [
    {
      user: {
        firstname: 'Андрей',
        lastname: '',
        avatar: user,
      },
      link: 'message.html?id=4',
      time: '10:49',
      missed: 2,
      lastmessage: 'Изображение'
    },
    {
      user: {
        firstname: 'Виктор',
        lastname: '',
        avatar: user2,
      },
      link: 'message.html?id=3',
      time: 'Вчера',
      lastmessage: 'репчик кстати нормально зачитал)())))'
    },
    {
      user: {
        firstname: 'Российские железные дороги (ОАО "РЖД")',
        lastname: '',
        avatar: user3,
      },
      link: 'message.html?id=2',
      time: '15 марта',
      lastmessage: 'На данный момент такой рекомендации от Роспотребнадзора нет.'
    },
    {
      user: {
        firstname: 'Citilink | Ситилинк',
        lastname: '',
        avatar: user4,
      },
      link: 'message.html?id=1',
      time: '11 ноября 2020',
      lastmessage: 'V0879713 на сумму 79990р Самовывоз с 15.11 после 18:00 по 18.11'
    }
  ]
};

class ChatList extends Block {
  constructor(props: {}, tmpl: string) {
    super(props, tmpl);
  }
  public render(): Function {
    return compileTemplate(this.tmpl);
  }
}
export const chatList = new ChatList(chatListOptions, chatListTmpl);  