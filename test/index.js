import { Block } from './block';
import { buttonTmpl } from './button.tmpl';
import { compileTemplate } from './compileTemplate';
class Button extends Block {
    constructor(props) {
          // Создаём враппер дом-элемент button
      super(props);
    }
  
    render() {
      return compileTemplate(buttonTmpl);
    }
  }
  
  function render(query, block) {
    const root = document.querySelector(query);
    root.append(block.getContent());
    return root;
  }
  const options = {
    text: 'Click me',
  };
  
  const button = new Button(options);  
  
  // app — это id дива в корне DOM
  render(".app", button);
  
  // Через секунду контент изменится сам, достаточно обновить пропсы
  setTimeout(() => {
    button.setProps({
      text: 'Click me, please',
    });
  }, 1000);