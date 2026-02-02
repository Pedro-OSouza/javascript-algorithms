/**
 * Algorithm: Count Occurrences
 *
 * Description:
 * Counts how many times a specific value appears in an array.
 *
 * Time Complexity:
 * - O(n)
 *
 * Space Complexity:
 * - O(1)
 */

function countOcurrences(numbers, target){
    if(numbers.length === 0 || !target) return null

    let count = 0

    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] === target){
            count++
        }
    }

    return count
}

//example 
console.log(countOcurrences([1, 2, 3, 2, 4, 2], 2))