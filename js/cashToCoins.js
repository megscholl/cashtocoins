


const dollarAmount = 2.42;

const piggyBank = {
    pennies: .32,
    dimes: .5,
    nickels: .35,
    quarters: 1.25
};


let coinConvert = {
    penny: .01,
    dime: .1,
    nickel: .05,
    quarter: .25
}

console.log("Inside my piggy bank is:", piggyBank);


var dollarPenny = (piggyBank.pennies /coinConvert.penny);
var dollarDime = (piggyBank.dimes/ coinConvert.dime );
var dollarNickel = Math.round(piggyBank.nickels / coinConvert.nickel);
var dollarQuarter = (piggyBank.quarters / coinConvert.quarter);

var cashToCoin = {
    pennies: dollarPenny,
    dimes: dollarDime,
    nickels: dollarNickel,
    quarters: dollarQuarter
}

// Your magic code here

console.log("Inside $2.42, there are " + dollarPenny + " pennies, " +  dollarDime + " dimes, " + dollarNickel + " nickels, and " + dollarQuarter + " quarters.");

console.log(cashToCoin);