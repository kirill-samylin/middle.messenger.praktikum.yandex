import { EventBus } from './event-bus';
import { compileTemplate } from './compileTemplate';
export class Block {
    static EVENTS = {
      INIT: "init",
      FLOW_CDM: "flow:component-did-mount",
      FLOW_RENDER: "flow:render",
      FLOW_CDU: "flow:component-did-update",
    };
  
    _element = null;
    _meta = null;
  
    /** JSDoc
     * @param {string} tagName
     * @param {Object} props
     *
     * @returns {void}
     */
    constructor(props = {}) {
      const eventBus = new EventBus();
      this._meta = {
        props
      };
  
      this.props = this._makePropsProxy(props);
  
      this.eventBus = () => eventBus;
      this._shell = null;
      this._registerEvents(eventBus);
      eventBus.emit(Block.EVENTS.INIT);
    }
  
    _registerEvents(eventBus) {
      eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
      eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
      eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
      eventBus.on(Block.EVENTS.FLOW_CDU, (oldProps, newProps) => this._componentDidUpdate(oldProps, newProps));
    }
    _createShell() {
      this._shell = this._createDocumentElement("div");
    }
  
    init() {
      this._createShell();
      this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }
  
    _componentDidMount() {
      this.componentDidMount();
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
    
    componentDidMount(oldProps) {}
  
    _componentDidUpdate(oldProps, newProps) {
      const response = this.componentDidUpdate(oldProps, newProps);
      if (response) {
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
      }
    }
    componentDidUpdate(oldProps, newProps) {
      return true;
    }

    setProps = nextProps => {
      if (!nextProps) {
        return;
      }
      this.props = Object.assign(this.props, nextProps);
      this.eventBus().emit(Block.EVENTS.FLOW_CDU, this.props, nextProps);
    };
  
    get element() {
      return this._element;
    }
    _render() {
      const tempaler = this.render();
      const element = tempaler(this.props);
      this._shell.innerHTML = element;
      if (element === null) return;
      if (this._element === null) {
        this._element = this._shell.firstElementChild;
      } else {
        this._element?.replaceWith(this._shell.firstElementChild)
      }
    }
  
      // Может переопределять пользователь, необязательно трогать
    render() {}
  
    getContent() {
      return this._element;
    }
  
    _makePropsProxy(props) {
      return new Proxy(props, {
        set(target, prop, value) {
          target[prop] = value;
          return true;
        },
        deleteProperty() {
          throw new Error('нет доступа');
        }
      });
    }
  
    _createDocumentElement(tagName) {
      // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
      return document.createElement(tagName);
    }
  
    show() {
      this.getContent().style.display = "block";
    }
  
    hide() {
      this.getContent().style.display = "none";
    }
  }