// type aliases.

// Basically type aliases are quite same as interfaces.
// The only difference is that type aliases can be used to create unions and intersections.
// Also, type aliases can be used to create primitive types like string, number, etc.
// In interface we use extends to create inheritance, but in type aliases we use the & operator to create intersections.
type Name = string;
type Age = number;

type Insaan = {
  naam: Name;
  umar: Age;
};

const getName = (obj: Insaan) => {
  return obj.naam;
};

const getAge = (obj: Insaan) => {
  return obj.umar;
};

console.log(getAge({ naam: "Amit", umar: 30 }));
console.log(getName({ naam: "Amit", umar: 30 }));
