// Sum of even and odd numbers in an array
let arr = [5, 8, 3, 7, 4, 6, 2];
let evenSum = 0;
let oddSum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        evenSum += arr[i];
    } else {
        oddSum += arr[i];
    }
}
console.log("Sum of even digits:", evenSum);
console.log("Sum of odd digits:", oddSum);
