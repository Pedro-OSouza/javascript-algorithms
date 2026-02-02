/**
 * Algorithm: Parity Check
 *
 * Description:
 * Checks whether a number is even.
 *
 * Time Complexity:
 * - O(1)
 *
 * Space Complexity:
 * - O(1)
 */

function isEven(number){
    return number % 2 === 0
}

//examples
console.log(isEven(4)) //true
console.log(isEven(7))//false