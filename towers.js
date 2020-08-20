'use strict';

const assert = require('assert');
// brings in the assert module for unit testing

const readline = require('readline');
// brings in the readline module to access the command line

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
// use the readline module to print out to the command line

// very similar to the board of arrays we used for Tic-Tac-Toe
// we use let because the variable is expected to change
let stacks = {
a: [4, 3, 2, 1],
b: [],
c: []
};

const printStacks = () => {
console.log("a: " + stacks.a);
console.log("b: " + stacks.b);
console.log("c: " + stacks.c);
}

const movePiece = () => {

  // Your code here

}

const isLegal = () => {
  // Your code here

}

const checkForWin = () => {
  // Your code here

}

const towersOfHanoi = (startStack, endStack) => {
  // Your code here

}

const getPrompt = () => {
printStacks();
rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
    towersOfHanoi(startStack, endStack);
    getPrompt();
    });
});
}

getPrompt();