// Electricity bill calculator using switch (BROWSER ONLY: uses prompt())
let category = prompt("Enter category (Domestic/Commercial/Industrial):");
let units = Number(prompt("Enter number of units consumed:"));

let bill = 0;
switch (category) {
    case "Domestic":
        bill = units * 5;
        break;
    case "Commercial":
        bill = units * 8;
        break;
    case "Industrial":
        bill = units * 10;
        break;
    default:
        console.log("Invalid category");
}
console.log("Electricity bill = Rs." + bill);
