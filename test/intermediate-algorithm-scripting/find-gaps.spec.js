const { findGaps } = require("../../src/intermediate-algorithm-scripting/find-gaps");
const { expect } = require('chai');

describe('Seek and Destroy', function () {
    it('should find gaps between ranges', function () {
        expect(findGaps([
            { from: 10, to: 40 },
            { from: 45, to: 50 },
            { from: 70, to: 90 }
        ])).to.have.deep.members([
            { from: 0, to: 9 },
            { from: 41, to: 44 },
            { from: 51, to: 69 },
            { from: 91, to: 100 }
        ]);

        expect(findGaps([
            { from: 0, to: 100 }
        ])).to.have.deep.members([

        ]);

        expect(findGaps([
            { from: 10, to: 40 },
            { from: 5, to: 70 }
        ])).to.have.deep.members([
            { from: 0, to: 4 },
            { from: 71, to: 100 }
        ]);

        expect(findGaps([
            { from: 0, to: 15 },
            { from: 85, to: 100 }
        ])).to.have.deep.members([
            { from: 16, to: 84 }
        ]);
    });
});