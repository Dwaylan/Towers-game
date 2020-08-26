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

let a = stacks.a
let b = stacks.b
let c = stacks.c
// a, b, and c are player inputs, but they need a variable to grab.
// Therefore we need them to hold their corresponding stacks. 

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
// We need a way to move the variable
// movePiece should have a start and an end. The game should start with the startStack
// aka "a"
// and continue on until the proper sequence is reached at the endstack.
// ** endstack can be "b" or "c" but it cannot be "a"
const movePiece = (startStack, endStack) => {
// function "movePiece" takes startStack and endStack as arguemts but what do they actaully
// do as arguements? startStack needs to be the beginning and endStack needs to be the end of 
// a move so:
let beginPhase = startStack;
let endPhase = endstack;

if (beginPhase == 'a' && endPhase == 'b'){
  b.push(a.pop());
  return stacks;
  
}
if (beginPhase == 'a' && endPhase == 'c'){
  c.push(a.pop());
  return stacks;

}
if (beginPhase == 'b' && endPhase == 'a'){
  a.push(b.pop());
  return stacks;

}
if (beginPhase == 'b' && endPhase == 'c'){
  c.push(b.pop());
  return stacks;

}
if (beginPhase == 'c' && endPhase == 'a'){
  a.push(c.pop());
  return stacks;

}
if (beginPhase == 'c' && endPhase == 'b'){
  b.push(c.pop());
  return stacks;

// First and foremost startStack and endStack MUST be defined

// *** The push() method adds new items to the end of an array, and returns the new length.
// *** The pop() method removes the last element of an array, and returns that element

// what I would like to do is pop the last element off of the starting stack and retrun it 
//  to a new stack

// *** I could not figure out how to do this so I commented it out and went back to the lengthy code
//  I created a new variable called endPiece which will call the startStack and pop off the 
// last element of said stack
// let movingPiece = (startStack).pop();
// endStack.push(movingPiece);
// endStack.push takes in the moving piece and literally pushes it to a new array ***
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
// 1.) Check if the move is legal
// 2.) If move is legal proceed with the process
// 3.) If said legal move constitues as a "win" print/log a winning message
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