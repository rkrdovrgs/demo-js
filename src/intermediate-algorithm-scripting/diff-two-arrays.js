const { expect } = require('chai');

/**
 * Compare two arrays and return the symmetric difference of the two arrays.
 * You can return the array with its elements in any order.
 * @param {any[]} arr1 
 * @param {any[]} arr2 
 * @returns {any[]} a new array with any items only found in one of the two given arrays, but not both
 */
function diffArray(arr1, arr2) {
    return arr1.reduce((arr, num) => {
        const index = arr.indexOf(num);
        if (index > -1) {
            arr.splice(index, 1);
        } else {
            arr.push(num);
        }

        return arr;
    }, arr2);
}

describe('Diff Two Arrays', function () {
    it('should return an array', function () {
        expect(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])).to.be.an("array");
    });

    it('should compare two arrays and return the diff', function () {
        expect(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])).to.have.all.members([4]);
        expect(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])).to.have.all.members(["pink wool"]);
        expect(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])).to.have.all.members(["diorite", "pink wool"]);
        expect(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])).to.have.all.members([]);
        expect(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])).to.have.all.members(["piglet", 4]);
        expect(diffArray([], ["snuffleupagus", "cookie monster", "elmo"])).to.have.all.members(["snuffleupagus", "cookie monster", "elmo"]);
        expect(diffArray([1, "calf", 3, "piglet"], [7, "filly"])).to.have.all.members([1, "calf", 3, "piglet", 7, "filly"]);
    });
});