/**
 * Algorithm: Minimum Value
 *
 * Description:
 * Finds the biggest value in an array of numbers.
 *
 * Time Complexity:
 * - O(n)
 *
 * Space Complexity:
 * - O(1)
 */

function max(numbers){
    if(numbers.length === 0) return null

    let max = numbers[0]

    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > max){
            max = numbers[i]
        }
    }

    return max
}

//example
console.log(max([0,1,5,2,8,3,4]))