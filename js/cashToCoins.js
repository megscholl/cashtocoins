const dollarAmount = 2.42;
let piggyBank = {}

let pennies = dollarAmount * 100;
let smallCoins = pennies % 25;
piggyBank.quarters = Math.floor(pennies / 25);
piggyBank.dimes = Math.floor((smallCoins) / 10);
piggyBank.nickel = Math.floor(((smallCoins) % 10) / 5);
piggyBank.penny = Math.floor(((smallCoins) % 10) % 5);

console.log(piggyBank);
