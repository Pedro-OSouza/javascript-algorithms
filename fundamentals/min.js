/**
 * Algorithm: Minimum Value
 *
 * Description:
 * Finds the smallest value in an array of numbers.
 *
 * Time Complexity:
 * - O(n)
 *
 * Space Complexity:
 * - O(1)
 */

function min(numbers){
    if(numbers.length === 0) return null

    let minimum = numbers[0]

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < minimum){
            minimum = numbers[i];
        }
    }

    return minimum
}

// example
console.log(min([9,4,2,6,1,8]))