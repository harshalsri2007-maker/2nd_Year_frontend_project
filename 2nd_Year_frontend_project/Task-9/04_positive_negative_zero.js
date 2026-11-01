// Sum of positives, sum of negatives, and count of zeroes in an array
let arr = [1, 2, 3, 4, 5, -1, -2, -3, -4, -5, 0, 0];
let positiveSum = 0;
let negativeSum = 0;
let zeroCount = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        positiveSum += arr[i];
    } else if (arr[i] < 0) {
        negativeSum += arr[i];
    } else {
        zeroCount++;
    }
}

console.log("Sum of positive numbers: " + positiveSum);
console.log("Sum of negative numbers: " + negativeSum);
console.log("Count of zeroes: " + zeroCount);
