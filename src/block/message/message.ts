import { compileTemplate } from '../../utils/Handlebars';
import { Block } from '../../modules/Block';
import { messageTmpl } from './message.tmpl';

class Message extends Block {
    constructor(props: {}, tmpl: string) {
        super(props, tmpl);
    }
    public render(): Function {
        return compileTemplate(this.tmpl);
    }
}
export const message = new Message({}, messageTmpl);  