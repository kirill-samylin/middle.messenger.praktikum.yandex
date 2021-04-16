import { header } from '../block/header';
import { profile } from '../block/profile';
import { renderContents } from '../utils/render';

renderContents("#root", [ header, profile ]);