import { inputTmpl } from './input.tmpl';
import { compileTemplate } from '../../utils/Handlebars';
import { Block } from '../../modules/Block';

export class Input extends Block {
    constructor(props: {}, tmpl: string = '') {
      super(props, tmpl);
    }
    public render(): Function {
      return compileTemplate(inputTmpl);
    }
  }