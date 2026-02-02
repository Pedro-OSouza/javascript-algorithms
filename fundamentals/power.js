/**
 * Algorithm: Power (Iterative)
 *
 * Description:
 * Calculates the result of a base raised to a non-negative integer exponent
 * using repeated multiplication.
 *
 * Time Complexity:
 * - O(n)
 *
 * Space Complexity:
 * - O(1)
 */

function power(base, exponent){
    let result = 1

    for(let i = 0; i < exponent; i++){
        result *= base
    }

    return result
}

//example
console.log(power(2, 4))