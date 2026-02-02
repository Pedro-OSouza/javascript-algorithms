/**
 * Algorithm: Sum of Elements
 *
 * Description:
 * Calculates the sum of all numbers in an array.
 *
 * Time Complexity:
 * - O(n)
 *
 * Space Complexity:
 * - O(1)
 */

function sum(numbers){
    /* the function recive an array and return a number */
    let total = 0

    for(let i = 0; i < numbers.length; i++){
        total += numbers[i]
    }

    return total
}

// example 
console.log(sum([1,2,3,4,5]))

module.exports = sum