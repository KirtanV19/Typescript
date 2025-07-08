// enum, interface, object, type

// enum: Define a finite set of roles
enum Role {
  Admin = "ADMIN",
  Manager = "MANAGER",
  Staff = "STAFF",
}
// interface: Define the shape of an Employee (Object)
interface Employee {
  id: number;
  name: string;
  email: string;
  role: Role; // reference from enum
}

// type: Create a union type that can be either an Employee or a number (ID)
// This allows us to pass either an Employee object or just an ID number to a function.
type EmployeeOrId = Employee | number;

// object: Actual runtime data
const currentEmployee: Employee = {
  id: 101,
  name: "Alice Johnson",
  email: "alice.j@company.com",
  role: Role.Manager,
};

// Function that accepts either an Employee object or an ID number
// and logs the details accordingly.
// This function demonstrates how to use the union type EmployeeOrId.
// It checks the type of the argument and logs the appropriate information.

const logEmployee = (emp: EmployeeOrId): void => {
  if (typeof emp === "number") {
    console.log(`Employee ID: ${emp}`);
  } else {
    console.log(`Employee Details:
      ID: ${emp.id}
      Name: ${emp.name}
      Email: ${emp.email}
      Role: ${emp.role}`);
  }
};

logEmployee(currentEmployee);
logEmployee(100);
logEmployee(101);
// console.log(logEmployee(currentEmployee)); // return undefined as the function is void or not returning anything

/*

| Feature             | `type` alias        | `interface`           |
| ------------------- | ------------------- | --------------------- |
| Object shapes       | ✅                   | ✅                     |
| Primitives          | ✅                   | ❌                     |
| Unions & tuples     | ✅                   | ❌                     |
| Extending           | ✅ via `&`           | ✅ via `extends`       |
| Declaration merging | ❌ No                | ✅ Yes                 |
| Preferred for       | Flexibility & logic | Public APIs & objects |

*/
