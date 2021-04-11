import { EventBus } from './../EventBus/EventBus';
import { makeUUID } from '../uuid';

enum EVENTS {
  INIT = "init",
  FLOW_CDM = "flow:component-did-mount",
  FLOW_RENDER = "flow:render",
  FLOW_CDU = "flow:component-did-update",
};

type TTarget = {
  prop: string
};

type THTML = HTMLElement | null;
type TEvents = {
  name:string, selector:string, cb:EventListenerOrEventListenerObject
}
type TProps = { events?: Array<TEvents> };
export class Block {
  readonly eventBus: EventBus;
  public shell: any;
  public props: TProps;
  public element: THTML;
  public tmpl: string;
  private _id: string;
  constructor(props: TProps, tmpl?: string) {
    this.shell = null;;
    this.eventBus = new EventBus();
    this.element = null;
    this._id = makeUUID();
    this.tmpl = tmpl || '';
    this.props = this.makePropsProxy(props);
    this.registerEvents();
    this.eventBus.emit(EVENTS.INIT);
  }

  private registerEvents() {
    this.eventBus.on(EVENTS.INIT, this.init.bind(this));
    this.eventBus.on(EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    this.eventBus.on(EVENTS.FLOW_RENDER, this._render.bind(this));
    this.eventBus.on(EVENTS.FLOW_CDU, (oldProps={}, newProps={}) => this._componentDidUpdate(oldProps, newProps));
  }

  private _createShell() {
    this.shell = this._createDocumentElement("div");
  }

  public init() {
    this._createShell();
    this.eventBus.emit(EVENTS.FLOW_CDM);
  }

  private _componentDidMount() {
    this.componentDidMount();
    this.eventBus.emit(EVENTS.FLOW_RENDER);
  }

	// Может переопределять пользователь, необязательно трогать
  public componentDidMount() {}

  private _componentDidUpdate(oldProps:{}, newProps:{}) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this.eventBus.emit(EVENTS.FLOW_RENDER);
    }
  }

	// Может переопределять пользователь, необязательно трогать
  public componentDidUpdate(oldProps:TProps, newProps:TProps):boolean {
    Object.assign(oldProps, newProps);
    return true;
  }

  private _addEvents():void {
    const { events = [] } = this.props;
    //console.log(document)
    events.forEach((event) => {
      const { name, selector, cb } = event;
      const element = this.element?.querySelector(selector);
      if (element) {
        element.addEventListener(name, cb);
      }
    });
  }

  setProps = (nextProps: TProps) => {
    if (!nextProps) {
      return;
    }
    this.props = Object.assign(this.props, nextProps);
    this.eventBus.emit(EVENTS.FLOW_CDU);
  };

  private _render():void {
    const tempaler: any = this.render();
    const element = tempaler(this.props);
    if (element === null || this.shell === null) return;
    this.shell.innerHTML = element;
    if (this.element === null) {
      this.element = this.shell.firstElementChild;
      this.element?.setAttribute('data-id', this._id);
    } else {
      this.element?.replaceWith(this.shell.firstElementChild)
    }
    this._addEvents();
  }

	// Может переопределять пользователь, необязательно трогать
  public render() {};

  public getElement() {
    return this.element;
  }

  public getContent() {
    return this.element?.outerHTML;
  }

   private makePropsProxy(props: {}) {
    return new Proxy(props, {
      set(target: TTarget, prop: keyof TTarget, value: any) {
        if (prop.indexOf('_') !== -1) {
          throw new Error('нет доступа');
        }
        target[prop] = value;
        return true;
      },
      deleteProperty() {
        throw new Error('нет доступа');
      },
    });
  }
  private _createDocumentElement(tagName:string = "div"): HTMLElement {
    return document.createElement(tagName);
  }

  public show(): void {
    this.element!.style.display = "block";
  }

  public hide(): void {
    this.element!.style.display = "none";
  }
}