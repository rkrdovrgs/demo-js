const { sumAll } = require("../../src/intermediate-algorithm-scripting/sum-all-numbers-in-a-range");
const { expect } = require('chai');

describe('Sum All Numbers in a Range', function () {
    it('should return a number', function () {
        expect(sumAll([1, 4])).to.be.a("number");
    });

    it('should sum all numbers in a range sorted asc', function () {
        expect(sumAll([1, 4])).to.equal(10);
        expect(sumAll([5, 10])).to.equal(45);
    });

    it('should sum all numbers in a range sorted desc', function () {
        expect(sumAll([4, 1])).to.equal(10);
        expect(sumAll([10, 5])).to.equal(45);
    });
});