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

module.exports = { diffArray };