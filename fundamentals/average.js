/**
 * Algorithm: Average of Elements
 *
 * Description:
 * Calculates the average (mean) value of numbers in an array.
 *
 * Time Complexity:
 * - O(n)
 *
 * Space Complexity:
 * - O(1)
 */

function average(numbers){
    if(numbers.length === 0) return null

    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }

    return sum / numbers.length
}

//example
console.log(average([2,4,6,8]))