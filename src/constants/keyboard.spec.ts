import { expect } from "chai"
import { Movement } from "./keyboard"

describe('Keyboard constants', () => {
    it('should have movements', () => {
        expect(Object.keys(Movement).length === 6).to.be.true;
    })
})