import { header } from '../block/header';
import { chat } from '../block/chat';

import { renderContents } from '../utils/render';

renderContents("#root", [ header, chat ]);
