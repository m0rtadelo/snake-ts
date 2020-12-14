import { expect } from "chai"
import { Status, VALID_MOVEMENTS } from "./game"

describe('Game constants', () => {
    it('should have correct status', () => {
        expect(Status.menu).to.not.be.undefined;
        expect(Status.playing).to.not.be.undefined;
        expect(Status.paused).to.not.be.undefined;
    })

    it('should have valid movements', () => {
        expect(['up', 'down', 'left', 'right'].length == VALID_MOVEMENTS.length).to.be.true;
    })
})