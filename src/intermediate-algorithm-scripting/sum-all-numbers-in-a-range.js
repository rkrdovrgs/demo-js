const { expect } = require('chai');

/**
 * Sum All Numbers in a Range
 * @param {number[]} arr array of two numbers
 * @returns {number} the sum of those two numbers plus the sum of all the numbers between them
 */
function sumAll(arr) {
    const sort = arr[0] > arr[1],
        start = sort + 0,
        end = !sort + 0;

    let sum = 0;

    for (let i = arr[start]; i <= arr[end]; i++) {
        sum += i;
    }
    return sum;
}


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