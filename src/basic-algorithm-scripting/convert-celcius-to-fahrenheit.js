const { expect } = require('chai');

/**
 * Convert from Celsius to Fahrenheit
 * @param {number} celsius representing a temperature in Celsius
 * @returns {number} the temperature in Farenheits
 */
function convertToF(celsius) {
    return (celsius * 9 / 5) + 32;
}

describe('Convert Celsius to Fahrenheit', function () {
    it('should convert celsius to farenheit', function () {
        expect(convertToF(-30)).to.equal(-22);
        expect(convertToF(-10)).to.equal(14);
        expect(convertToF(0)).to.equal(32);
        expect(convertToF(20)).to.equal(68);
        expect(convertToF(30)).to.equal(86);
    });
});