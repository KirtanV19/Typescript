// any, unknown

let value: any;

value = 5;
value = "Hello";

value.toString(); // No error, but could lead to runtime issues

let value2: unknown;
value2 = 5;
value2 = "Hello";

// value2.toString(); // Error: Object is of type 'unknown'.

// To use it, we need to assert its type
if (typeof value2 === "string") {
  value2.toString(); // Now it's safe to call toString
}
// or

(value2 as string).toString(); // Type assertion

console.log("value", value);
console.log("value2", value2);
