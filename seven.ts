// Function

/*
const display = (a: number, b: number): number => {
  return a + b;
};
// console.log(display(1, 2));

// Function with default parameters
const displayWithDefault = (a: number, b: number = 2): number => {
  return a + b;
};
// console.log(displayWithDefault(1)); // 3
// console.log(displayWithDefault(1, 3)); // 4

// Function with optional parameters

const displayWithOptional = (a: number, b?: number): number => {
  return a + (b || 0);
};

// console.log(displayWithOptional(1)); // 1
// console.log(displayWithOptional(1, 2)); // 3
*/

// Callback functions

/*
// 1. Define the function shape
type Callback = (value: string) => void;

// 2. Create a function that accepts a callback of that shape
const getValue = (cb: Callback): void => {
  cb("TS"); // invokes the callback with a string
};

// 3. Call it with a matching arrow function
getValue((msg) => console.log(msg.toLowerCase())); // TS
*/

// Rest Parameter

const arrValue = (...arg: Array<number | string>) => {
  console.log(arg);
};
arrValue(1, 2, 3, 4, 5);
