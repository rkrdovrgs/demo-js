const { expect } = require('chai');

/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * @param {number} number 
 * @returns {number} the sum of all the multiples of 3 or 5 below the provided parameter value
 */
function multiplesOf3and5(number) {
    let sum = 0;

    for (let n = 1; n < number; n++) {
        if (n % 3 === 0 || n % 5 === 0) {
            sum += n;
        }
    }

    return sum;
}

describe('Multiples of 3 and 5', function () {
    it('should find the sum of all the multiples of 3 or 5 below the provided parameter value', function () {
        expect(multiplesOf3and5(1000)).to.equal(233168);
        expect(multiplesOf3and5(49)).to.equal(543);
        expect(multiplesOf3and5(19564)).to.equal(89301183);
    });
});