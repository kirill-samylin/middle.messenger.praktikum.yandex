import { compileTemplate } from '../../modules/templator';
import { messageTmpl } from './message.tmpl';

export const message = compileTemplate(messageTmpl);