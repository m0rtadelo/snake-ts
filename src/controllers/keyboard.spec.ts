import { expect } from 'chai';
import { Keyboard } from './keyboard';

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM(`...`);

class FakeEventTarget {
  constructor() {}
  addEventListener: () => true;
  removeEventListener: () => true;
  dispatchEvent: () => true;
}

global.window = window;
describe('Keyboard', () => {

  const keyboard = new Keyboard(new FakeEventTarget());

  it('should load', () => {
    expect(keyboard).to.not.undefined;
  })
})