import { expect } from "chai"
import { COLOR } from "./color"

describe('Color', () => {
    it('should have the colors', () => {
        expect(COLOR.darkred).to.not.be.undefined;
        expect(COLOR.green).to.not.be.undefined;
        expect(COLOR.red).to.not.be.undefined;
        expect(COLOR.yellow).to.not.be.undefined;
    })
})