/*
Given an array on numbers, return true if the array is in ascending order, false otherwise
For example:
1,2,3,4,5,6 will result in true 
1,2,3,5,4,6 will result in false 
1,2,3,5,6,6 will result in true
*/

arr1 = [1, 2, 3, 4, 5, 6];
arr2 = [1, 2, 3, 5, 4, 6];
arr3 = [1, 2, 3, 5, 6, 6];

function isAscending(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return false;
        }
    }
    return true;
}

console.log(isAscending(arr1));
console.log(isAscending(arr2));
console.log(isAscending(arr3));