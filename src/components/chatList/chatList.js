import { compileTemplate } from '../../modules/templator';
import { chatListTmpl } from './chatList.tmpl';

import user from '../../../static/img/user.png';
import user2 from '../../../static/img/user2.png';
import user3 from '../../../static/img/user3.png';
import user4 from '../../../static/img/user4.png';

export const chatListOptions = {
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

export const chatList = compileTemplate(chatListTmpl);