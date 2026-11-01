// Check whether a number is a palindrome
let num = 12321;
let k = num;
let rev = 0;
while (k > 0) {
    let rem = k % 10;
    rev = rev * 10 + rem;
    k = Math.floor(k / 10);
}
if (num == rev) {
    console.log(num + " is a palindrome number.");
}
