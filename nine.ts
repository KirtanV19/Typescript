// Type assertion [ Type casting ] :- User know the actual type of the value.

let c: any = 12;

// methods to do Type-assertion

/*
(c as number).toString();
(<number>c).valueOf();
*/

// No null assertion operator:- User ensure that the value neither "undefined" nor "null".

// let d: undefined | null | string;
// console.log(d!.toUpperCase());

// Type guards:- Type narrowing

const getTypes = (value: string | number) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value.toFixed(2);
  } else {
    return "Unknown type";
  }
};

console.log(getTypes("hello")); // "HELLO"
console.log(getTypes(123.456)); // "123.46"
// console.log(getTypes(true)); // "Unknown type"
