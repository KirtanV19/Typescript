// Special types

// null, undefined, any, unknown, never
let isNull: null = null; // null is a special type that represents the absence of any value, declare and assign an empty value
// Note: In TypeScript, null is a subtype of all types, meaning you can assign
console.log("isNull: ", isNull);

let isUndefined: undefined = undefined; // undefined is a special type that represents a variable that has not been assigned a value, declare but not assigned any value
console.log("isUndefined: ", isUndefined);

let isAny: any = "This can be anything";
console.log("isAny: ", isAny);

let isUnknown: unknown =
  "This can be anything but you need to check the type before using it";
console.log("isUnknown: ", isUnknown);
// Note: unknown is safer than any because it forces you to do type checking before using the value

// function throwError(message: string): never {
//   throw new Error("This is an error");
// }

// console.log("throwError: ", throwError("This will throw an error"));
// Note: The function throwError never returns a value because it always throws an error.
// never is a type that represents values that never occur, such as functions that always throw an error or never return.

const loop = function () {
  while (true) {}
};
// Note: This function also never returns a value because it runs indefinitely.
console.log("loop: ", loop());
