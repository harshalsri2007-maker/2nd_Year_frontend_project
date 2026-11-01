// Print multiples of 5 up to 100 using do-while, and their sum
let i = 5;
let sum = 0;
do {
    console.log(i);
    sum += i;
    i = i + 5;
}
while (i <= 100);
console.log("Sum of the sequence: " + sum);
