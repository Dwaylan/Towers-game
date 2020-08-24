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

// An object that represents the three stacks of Towers of Hanoi; 
  // * each key is an array of Numbers: 
    // * A is the far-left, 
    // * B is the middle, 
    // * C is the far-right stack
      // * Each number represents the largest to smallest tokens: 
        // * 4 is the largest, 
        // * 1 is the smallest


// very similar to the board of arrays we used for Tic-Tac-Toe
// we use let because the variable is expected to change
let stacks = {
a: [4, 3, 2, 1],
b: [],
c: []
};

// Start here. What is this function doing?
const printStacks = () => {
console.log("a: " + stacks.a);
console.log("b: " + stacks.b);
console.log("c: " + stacks.c);
}

// Next, what do you think this function should do?
const movePiece = () => {
  // Your code here

}

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
const isLegal = () => {
  // Your code here

}

// What is a win in Towers of Hanoi? When should this function run?
const checkForWin = () => {
  // Your code here

}

// When is this function called? What should it do with its argument?
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

// Tests

if (typeof describe === 'function') {

describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
    towersOfHanoi('a', 'b');
    assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
});

describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
    stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
    };
    assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
    stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
    };
    assert.equal(isLegal('a', 'c'), true);
    });
});
describe('#checkForWin()', () => {
    it('should detect a win', () => {
    stacks = { a: [], b: [4, 3, 2, 1], c: [] };
    assert.equal(checkForWin(), true);
    stacks = { a: [1], b: [4, 3, 2], c: [] };
    assert.equal(checkForWin(), false);
    });
});

} else {

getPrompt();

}