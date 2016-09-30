/**
 *   @author Thompson, Charles (Coti5432@gmail.com)
 *   @version 0.0.1
 *   @summary Find moneyz
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let policyNum, birthYear, dueMonth, dueDay, dueYear, age, numAccidents, totalCost;
let firstName, lastName;
let continueResponse;

function main(){
    process.stdout.write('\x1Bc'); //Clears the screen
    if (continueResponse == null) {
        setContinueResponse();
    }
    if (continueResponse === 1) {
        setFirstName();
        setLastName();
        setBirthYear();
        setAge();
        setPolicyNum();
        setDueMonth();
        setDueDay();
        setDueYear();
        setNumAccidents();
        setTotalCost();
        printTotal();
        setContinueResponse();
        return main();
    }
    printGoodbye();
}

main();

function setContinueResponse() {
    if (continueResponse) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
    } else {
        continueResponse = 1;
    }
}

function setFirstName(){
    firstName = PROMPT.question('\nWhat is your first name?\n');
}

function setLastName(){
    lastName = PROMPT.question('\n\nWhat is your last name?\n');
}

function setBirthYear(){
    birthYear = Number(PROMPT.question('\n\nWhat year were you born?\n'));
}

function setPolicyNum() {
    policyNum = Math.floor((Math.random() * 1000) + 1);  //JavaScript random number
}

function setDueMonth(){
    dueMonth = Number(PROMPT.question('\n\nWhat is your premium due month?\n'));
}

function setDueDay(){
    dueDay = Number(PROMPT.question('\n\nWhat is your premium due day?\n'));
}

function setDueYear(){
    dueYear = Number(PROMPT.question('\n\nWhat is your premium due year?\n'));
}
function setNumAccidents(){
    numAccidents = Number(PROMPT.question('\n\nHow many at-fault accidents have you been in for the last 3 years?\n'));
}

function setAge(){
    age = 2016 - birthYear;
}

function setTotalCost() {
    const BASE_PRICE = 100,
        YOUNG_AGE_FEE = 20,
        MEDIUM_AGE_FEE = 10,
        MAX_AGE_FEE = 30,
        ACCIDENTS = 50;
    if (age >15 && age < 30) {
        totalCost = BASE_PRICE + YOUNG_AGE_FEE + ACCIDENTS * numAccidents;

    } else if (age >= 30 && age < 45) {
        totalCost = BASE_PRICE + MEDIUM_AGE_FEE + ACCIDENTS * numAccidents;

    } else if (age >= 60) {
        totalCost = BASE_PRICE + MAX_AGE_FEE + ACCIDENTS * numAccidents;

    } else {
        totalCost = BASE_PRICE + ACCIDENTS * numAccidents;
        }
    }

function printTotal(){
    process.stdout.write('\x1Bc');
    console.log(firstName + ' ' + lastName + 's insurance bill will be $' + totalCost);
}

function printGoodbye(){
    process.stdout.write('\x1Bc');
    console.log('\n\tGoodbye');
}