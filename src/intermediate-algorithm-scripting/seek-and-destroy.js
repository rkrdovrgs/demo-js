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

module.exports = { destroyer };