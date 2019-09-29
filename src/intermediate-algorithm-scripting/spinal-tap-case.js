const { expect } = require('chai');

/**
 * Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 * @param {string} str the original string to be converted
 * @returns {string} the spinal case string
 */
function spinalCase(str) {
    return str.replace(/(\s|_)+/g, "-")
        .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
        .toLowerCase();
}


describe('Spinal Tap Case', function () {
    it('should convert a string to spinal case', function () {
        expect(spinalCase("This Is Spinal Tap")).to.equal("this-is-spinal-tap");
        expect(spinalCase("thisIsSpinalTap")).to.equal("this-is-spinal-tap");
        expect(spinalCase("The_Andy_Griffith_Show")).to.equal("the-andy-griffith-show");
        expect(spinalCase("Teletubbies say Eh-oh")).to.equal("teletubbies-say-eh-oh");
        expect(spinalCase("AllThe-small Things")).to.equal("all-the-small-things");
    });
});