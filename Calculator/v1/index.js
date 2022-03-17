function calc(operation, a, b) {
   const operations = {
      sum: a + b,
      sub: a - b,
      multi: a * b,
      div: a / b,
      remain: a % b,
      exp: a ** b,
   };
   if (operation && typeof a === "number" && typeof b === "number") {
      if (operations.hasOwnProperty(operation)) {
         for (const key in operations) {
            if (operation === key) {
               return operations[key];
            }
         }
      } else return "unknown operation";
   } else return "Error";
}

console.log(calc("remain", 8, 4));
console.log(calc("sum", 8, 4));
console.log(calc("div", "8", 4));
