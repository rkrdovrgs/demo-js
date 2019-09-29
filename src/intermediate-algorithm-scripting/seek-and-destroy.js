const { expect } = require('chai');

/**
 * You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
 * Remove all elements from the initial array that are of the same value as these arguments.
 * @param {any[]} arr initial array
 * @param  {...any} except one or more arguments to be removed from the initial array
 * @returns {any[]}
 */
function destroyer(arr, ...except) {
    // Remove all the values
    return arr.filter(a => !except.includes(a));
}

describe('Seek and Destroy', function () {
    it('should remove all elements from the initial array that are on the rest of arguments', function () {
        expect(destroyer([1, 2, 3, 1, 2, 3], 2, 3)).to.eql([1, 1]);
        expect(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)).to.eql([1, 5, 1]);
        expect(destroyer([3, 5, 1, 2, 2], 2, 3, 5)).to.eql([1]);
        expect(destroyer([2, 3, 2, 3], 2, 3)).to.eql([]);
        expect(destroyer(["tree", "hamburger", 53], "tree", 53)).to.eql(["hamburger"]);
        expect(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")).to.eql([12, 92, 65]);
    });
});
