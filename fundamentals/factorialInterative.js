/**
 * Algorithm: Factorial (Iterative)
 *
 * Description:
 * Calculates the factorial of a non-negative integer using a loop.
 *
 * Time Complexity:
 * - O(n)
 *
 * Space Complexity:
 * - O(1)
 */

function factorialInterative(n){
    if(n < 0) return null

    let result = 1

    for (let i = 2; i <= n; i++) {
        result *= i
    }

    return result
}

//examples
console.log(factorialInterative(5))