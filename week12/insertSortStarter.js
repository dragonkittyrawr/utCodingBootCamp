// ===============================================
// RUN THIS USING NODE
// ===============================================

// Instructions
// Using the pseudo-code below and what you can research online, implement Insertion sort in JavaScript.
// - start at the beginning of the array
// - move into a loop
// - compare only 2 values
// - swap if left is more than right
// - repeat until this current value is less than the right value OR the value is at the far right of the array
// - pseudo code:
// for i ← 1 to length(A) - 1
//     j ← i
//     while j > 0 and A[j-1] > A[j]
//         swap A[j] and A[j-1]
//         j ← j - 1
//     end while
// end for
// * Then, test your algorithm with each of the commented out arrays of data. As a bonus, use Benchmark.js to time it in both cases.

// ================================================
// TEST CASES
// ================================================

// Case 1 - Small Set of Numbers
var arraySize = 40;

// // Case 2 - Large set of Numbers
// var arraySize = 400000;

var array = [];
for (var index = 0; index < arraySize; index++) {
  var randomNumber = Math.round(Math.random() * arraySize);

  array.push(randomNumber);
}

// ================================================
// SOLUTION - Insertion Sort
// ================================================

function insertionSort(items) {

    var len = items.length, // number of items in the array
        value,              // the value currently being compared
        i,                  // index into unsorted section
        j;                  // index into sorted section

    for (i = 0; i < len; i++) {

        // store the current value because it may shift later
        value = items[i];

         // * Whenever the value in the sorted section is greater than the value
         // * in the unsorted section, shift all items in the sorted section over
         // * by one. This creates space in which to insert the value.
         
        for (j = i - 1; j > -1 && items[j] > value; j--) {
            items[j + 1] = items[j];
        }

        items[j + 1] = value;
    }

    return items;
}

// ================================================
// FUNCTION CALL
// ================================================
console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(insertionSort(array).join(" "));
