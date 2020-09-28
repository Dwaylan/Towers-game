"use strict";

const assert = require("assert");
// brings in the assert module for unit testing

const readline = require("readline");
// brings in the readline allows the program to read an interprit
// user input.

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
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

let a = stacks.a;
let b = stacks.b;
let c = stacks.c;
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
};

// 9/16/2020 I needed an error message variable to reference. I was using
// error message in the code below but it was never defined. I didn't realize
// Why the game wouldn't load until I looked closer at the reference error in the terminal
let errorMessage = "Illegal move. Please reconsider";

let winStatement = "Congrats. Player is victorious";

// Next, what do you think this function should do?
// We need a way to move the variable
// movePiece should have a start and an end. The game should start with the startStack
// aka "a"
// and continue on until the proper sequence is reached at the endstack.
// ** endstack can be "b" or "c" but it cannot be "a"
const movePiece = (startStack, endStack) => {
  // function "movePiece" takes startStack and endStack as arguemts but what do they actaully
  // do as arguements? startStack needs to be the beginxning and endStack needs to be the end of
  // a move so:
  let beginningPhase = stacks[startStack];
  let endPhase = stacks[endStack];

  let movingPhase = beginningPhase.pop();
  endPhase.push(movingPhase);
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

  // **** UPDATE 9/9/20. I figured out why I couldn't get the function to fire. I kept trying
  // to create startStack and endStack which were variables that were already defined. Rather
  // than redefining them I called them and IT WORKED!
};

// Before you move, should you check if the move it actually allowed?
// Should 3 be able to be stacked on 2?
// This function is to check and see if the top piece from the startStack to the top piece
// of the endStack is a legal move. Remember, larger numbers CANNOT be stacked on smaller numbers

const isLegal = (startStack, endStack) => {
  // What is legal?:
  // Start is not empty. Starting array aka 'a' should have four elements [4,3,2,1]
  // First round of moves should only allow you to move to an empty array aka 'b' and 'c'
  // You cannot start at 'a' and end at 'a'. You MUST move to either 'b' or 'c' and
  // those arrays must be empty at the start of the game.
  // small pieces must be stacked on their bigger counterparts, not vice-versa.

  // what is illegal?
  // If start is empty then the game is attempting to initiate illegally
  // If the end piece is trying to stack on a smaller piece that preceeded it

  // Once again beginning phase and end phase must be defined. Our function needs ti know
  // what variables are being referenced when called.
  let beginningPhase = stacks[startStack];
  let endPhase = stacks[endStack];

  //  If the end phase tries to end on the beginning phase array, it is illegal
  // you cannot start and end on 'a', you cannot start and end on 'b', etc.
  if (startStack == endStack) {
    console.log(errorMessage);
    return false;
  }
  if (beginningPhase == undefined || endPhase == undefined) {
    console.log(errorMessage);
    return false;
  }
  if (beginningPhase.length == 0) {
    console.log(errorMessage);
    return false;
  }
  if ((endPhase.length = 0)) {
    return true;
  }
  let pieceToMove = beginningPhase[beginningPhase.length - 1];
  let tipOfEnd = endPhase[endPhase.length - 1];
  if (pieceToMove < tipOfEnd) {
    return true;
  } else {
    return false;
  }
};

// What is a win in Towers of Hanoi? When should this function run?
// "win" is when endStack is equal to: [4,3,2,1]
// *** note that the endStack can be "b" OR "c". It's not necessarily "c"
// just because "c" is the last array.***

const checkForWin = () => {
  // We're checking to see if a win has happened. Remember, we have already checked
  // to see if the move is legal so we have proceeded to this step. If we have returned
  // a stack on b or c that is equal to 4 we have WON! now we need to log a winning statement
  // if applicable

  // Defining our stack variables once again
  let b = stacks.b;
  let c = stacks.c;

  // If the length of b is 4 log player win. Remember we should have safegaurds
  // in place beyond this point to make sure you can only have a length of 4 by
  // following proper protocol and aligning all elements as [4,3,2,1]
  if (b.length === 4) {
    console.log(winStatement);
    return true;
    // else, if c has a length of 4 return player win
  } else if (c.length === 4) {
    console.log(winStatement);
    return true;
  } else {
    // else return false and continue the loop.
    return false;
  }
};

// When is this function called? What should it do with its argument?
// This is the one function that runs the game
const towersOfHanoi = (startStack, endStack) => {
  if (isLegal(startStack, endStack) == true) {
    movePiece(startStack, endStack);
  } else {
    checkForWin();
  }
};
// startStack is what the user enters for their starting stack
// endStack is what the user enters for their ending stack
// 1.) Check if the move is legal
// 2.) If move is legal proceed with the process
// 3.) If said legal move constitues as a "win" print/log a winning message

// The function below prints the board
const getPrompt = () => {
  printStacks();
  // Function below asks the starting point
  rl.question("start stack: ", (startStack) => {
    //  Function below asks the ending point
    rl.question("end stack: ", (endStack) => {
      towersOfHanoi(startStack, endStack);
      //  Get prompt starts the loop all over again UNLESS there is a win
      getPrompt();
    });
  });
};

// Tests

if (typeof describe === "function") {
  describe("#towersOfHanoi()", () => {
    it("should be able to move a block", () => {
      towersOfHanoi("a", "b");
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe("#isLegal()", () => {
    it("should not allow an illegal move", () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: [],
      };
      assert.equal(isLegal("a", "a"), false);
      assert.equal(isLegal("b", "b"), false);
      assert.equal(isLegal("c", "c"), false);
    });
    it("should allow a legal move", () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: [],
      };
      assert.equal(isLegal("a", "c"), stacks);
      assert.equal(isLegal("a", "b"), stacks);
      assert.equal(isLegal("b", "c"), stacks);
    });
  });
  describe("#checkForWin()", () => {
    it("should detect a win", () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {
  getPrompt();
}
