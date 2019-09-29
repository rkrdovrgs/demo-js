const { expect } = require('chai');

/**
 * Finds the gaps between selected reanges
 * @param {Array<{from: number, to: number}>} ranges the list of already selected ranges
 * @returns {Array<{from: number, to:number}>} the list of gaps between ranges
 */
function findGaps(ranges) {
    const blocks = new Array(101);
    ranges.forEach(r => {
        for (let i = r.from; i <= r.to; i++) {
            blocks[i] = true;
        }
    });

    let currentIndex = 0;
    const gaps = [];

    for (let i = 0; i <= 100; i++) {
        const isUsed = blocks[i];
        if (!isUsed && !gaps[currentIndex]) {
            gaps[currentIndex] = { from: i };
        } else if (isUsed && !!gaps[currentIndex]) {
            gaps[currentIndex].to = i - 1;
            currentIndex += 1;
        }
    }

    if (gaps.length > 0 && !!gaps[currentIndex]) {
        gaps[currentIndex].to = 100;
    }

    return gaps;
}

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