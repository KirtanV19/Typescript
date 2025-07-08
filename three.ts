// Arrow Function

// Basic Arrow Function (inferred types)
const add = (first: string) => console.log("first", first);

// Explicit parameter and return types:
const addOne = (a: number, b: number): number => {
  return a + b;
};

// Optional Parameter :- if it exists, it will be used; otherwise, it defaults to undefined

const addTwo = (a: number, b: number, c?: number) => {
  return a + b + (c || 0);
};

// Arrow Function with Multiple Parameters
const logUser = (name: string, age: number): void => {
  console.log(`User ${name} is ${age} years old.`);
};

// Arrow Function with Custom Types
type Person = {
  id: number;
  name: string;
};

const printUser = (user: Person): void => {
  console.log(`User: ${user.name}`);
};
