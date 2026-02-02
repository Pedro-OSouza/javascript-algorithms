/**
 * Algorithm: Factorial (Recursive)
 *
 * Description:
 * Calculates the factorial of a non-negative integer using recursion.
 *
 * Time Complexity:
 * - O(n)
 *
 * Space Complexity:
 * - O(n) due to call stack
 */

function factorialRecursive(n){
    if(n < 0) return null

    if(n === 0 || n === 1) return 1

    return n * factorialRecursive(n - 1)
}

//example
console.log(factorialRecursive(5))