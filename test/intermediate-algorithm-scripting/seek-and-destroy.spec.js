const { destroyer } = require("../../src/intermediate-algorithm-scripting/seek-and-destroy");
const { expect } = require('chai');

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