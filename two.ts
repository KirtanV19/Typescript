// Arrays & Tuples

// standard type
let aray: number[] = [1, 2, 3, 4];
console.log("aray: ", aray);

// Generic type
let array1: Array<number> = [1, 2, 3, 4];
console.log("array1: ", array1);

// Union type
let mixedArray: Array<number | string> = [1, "1", 2, "2", 3, 5];
console.log("mixedArray: ", mixedArray);

// Custom type
type User = {
  id: number;
  name: string;
  age: number;
};

let arrays: Array<User> = [{ id: 1, name: "a", age: 25 }]; // Array<User> or User[]
console.log("arrays: ", arrays);

let arrays1: Array<User | number> = [1, 2, 3, 4, { id: 1, name: "a", age: 25 }];
console.log("arrays1: ", arrays1);

// Readonly array
let roles: readonly number[] = [1, 2, 3, 4];
console.log("roles: ", roles);

// Readonly using genric
let roles1: ReadonlyArray<string | number> = [1, 2, 3, 4, 5, "six"];
console.log("roles1: ", roles1);

// Multiple datatype
let point: [number | string, number] = [1, 2];
console.log("point: ", point);

let point1: [number | string, number] = ["1", 2];
console.log("point1: ", point1);

// Type guards
const values: Array<string | number> = [1, 2, "three"];

const intValues = values.filter((v): v is number => typeof v === "number");

console.log("values", values);
console.log("intValues", intValues);

const values1: Array<number | string> = [2, 4, 6, 8, 10, 11, "eleven"];
console.log("values1: ", values1);

// const filterValues = values1
//   .filter((v): v is number => typeof v === "number")
//   .filter((n) => n % 2 === 0);

const filterValues = values1.filter(
  (v): v is number => typeof v === "number" && v % 2 === 0
);
console.log("filterValues: ", filterValues);

// mutation in readonly array

let a: ReadonlyArray<number> = [1, 2, 3, 4, 5];
let b: Array<number> = [...a];

// It is works same in 'const' also
