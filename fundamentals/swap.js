/**
 * Algorithm: Swap Values
 *
 * Description:
 * Swaps two values using a temporary variable.
 *
 * Time Complexity:
 * - O(1)
 *
 * Space Complexity:
 * - O(1)
 */

function swap(a, b){
    let temp = a
    a = b
    b = temp
    
    return [a, b]
}

const [x, y] = swap(3, 7)
console.log(x, y) // 7 3