// Generics

/*

-> Generics in TypeScript allow you to create reusable components that work with any data type—but still provide type safety.

-> Instead of hardcoding a type like string, number, or boolean, you use a type variable that will be specified later when the function, class, or interface is used.

*/

// Generic Syntax:-

const functionName = <T>(arg: T): T => {
  return arg;
};

const one = functionName(42); // functionName<number>(42);
console.log("one: ", one);

/*
-> T is a type parameter.
-> When you call the function, you pass a type for T.
*/

// 1. Generic with function

/*
const printValue = <T>(arg: T): void => {
  console.log("arg", arg);
};

printValue(42);
printValue("hello");
printValue<string>("olleH");
*/

// 2. Generic with arrays

const printArrays = <T>(arg: Array<T>): Array<T> => {
  return arg;
};

const aa = printArrays([1, 2, 3]);
console.log("a", aa);

// 3. Generics with interface

interface Human {
  name: string;
  age: number;
}

const getHumanData = <T extends Human>(obj: T): void => {
  console.log(`Name: ${obj.name}, Age: ${obj.age}`);
};

getHumanData({ name: "Alice", age: 25 });
