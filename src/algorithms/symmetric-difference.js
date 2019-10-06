const { expect } = require('chai');

/**
 * Compare two or more arrays and return the symmetric difference of the arrays.
 * @param {Array<[]>} args the arrays to be compared
 * @returns {any[]} an array of the symmetric difference of the provided arrays
 */
function sym(...args) {
    const all = [];

    // for each array find the unique values
    for (let i = 0; i < args.length; i++) {
        all.push(...args[i].reduce((arr, num) => {
            if (!arr.includes(num)) {
                arr.push(num);
            }
            return arr;
        }, []));
    }

    // remove duplicated values from array
    return all.reduce((arr, num) => {
        const index = arr.indexOf(num);
        if (index > -1) {
            arr.splice(index, 1);
        } else {
            arr.push(num);
        }

        return arr;
    }, []);;
}

describe('Find the Symmetric Difference', function () {
    it('should compare two or more arrays and return symmetric difference', function () {
        expect(sym([1, 2, 3], [5, 2, 1, 4])).to.have.all.members([3, 4, 5]);
        expect(sym([1, 2, 3, 3], [5, 2, 1, 4])).to.have.all.members([3, 4, 5]);
        expect(sym([1, 2, 3], [5, 2, 1, 4, 5])).to.have.all.members([3, 4, 5]);
        expect(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])).to.have.all.members([1, 4, 5]);
        expect(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])).to.have.all.members([1, 4, 5]);
        expect(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])).to.have.all.members([2, 3, 4, 6, 7]);
    });
});