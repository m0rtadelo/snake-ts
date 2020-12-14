import { InputMethod } from "../interfaces/controller";

export class Keyboard implements InputMethod {
  event: EventTarget;
  constructor(eventTarget?: EventTarget) {
    this.event = eventTarget || new EventTarget();

    const keyData = new Map<string, string>();
    keyData.set('ArrowUp', 'up');
    keyData.set('ArrowDown', 'down');
    keyData.set('ArrowLeft', 'left');
    keyData.set('ArrowRight', 'right');
    keyData.set('Enter', 'ok');
    keyData.set('Escape', 'ko');

    window.addEventListener('keydown', (e) => {
      if (keyData.has(e.key)) {
        this.event.dispatchEvent(
          new CustomEvent('input', { detail: keyData.get(e.key) })
        )
      }
    })
  }
}