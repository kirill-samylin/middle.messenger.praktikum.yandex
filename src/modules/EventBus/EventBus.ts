type TFunction = () => void;
type TListEvent = {[event: string]: TFunction[]};

export class EventBus {
  private listeners: TListEvent;
  constructor() {
    this.listeners = {};
  }
  private checkExistenceEvent(event: string): void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }
  }
  public on(event: string, callback: TFunction): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  public off(event: string, callback: TFunction): void {
    this.checkExistenceEvent(event);
    this.listeners[event] = this.listeners[event].filter(
      listener => listener !== callback
    );
  }

  public emit(event: string, ...args: []): void {
    this.checkExistenceEvent(event);
    this.listeners[event].forEach(function(listener) {
      listener(...args);
    });
  }
}