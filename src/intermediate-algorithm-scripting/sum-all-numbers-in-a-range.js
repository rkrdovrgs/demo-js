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

module.exports = { sumAll };