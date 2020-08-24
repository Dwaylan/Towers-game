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


// very similar to the board of arrays we used for Tic-Tac-Toe.
// we use "let" because the variable is expected to change
// The board is an object and  a, b, and c are keys that hold arrays.
let stacks = {
a: [4, 3, 2, 1],
b: [],
c: [],
};

// Start here. What is this function doing?
const printStacks = () => {
console.log("a: " + stacks.a);
console.log("b: " + stacks.b);
console.log("c: " + stacks.c);
// printStacks is literally printing/logging the stacks inside of the terminal
// on top of each other like the board
// It prints the key as text and corresponding array right next to it
}

// Next, what do you think this function should do?
// movePiece should have a start and an end. The game should start with the startStack
// aka "a"
// and continue on until the proper sequence is reached at the end stack.
// aka stack "c"
const movePiece = (startStack, endStack) => {
// function "movePiece" takes startStack and endStack as arguemts

}


// Before you move, should you check if the move it actually allowed? 
// Should 3 be able to be stacked on 2?
// This function is to check and see if the top piece from the startStack to the top piece
// of the endStack is a legal move. Remember, larger numbers CANNOT be stacked on smaller numbers
const isLegal = (startStack, endStack) => {
  // Your code here

}

// What is a win in Towers of Hanoi? When should this function run?
// "win" is when endStack is equal to: [4,3,2,1]
// *** note that the endStack can be "b" OR "c". It's not necessarily "c"
// just because "c" is the last array.***
const checkForWin = (startStack, endStack) => {
  // Your code here

}

// When is this function called? What should it do with its argument?
// This is the one function that runs the game
// startStack is what the user enters for their starting stack
// endStack is what the user enters for their ending stack
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