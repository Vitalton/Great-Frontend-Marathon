const outArea = document.querySelector(".out");
const btnClear = document.querySelector(".clear");
const btnEdit = document.querySelector(".edit--enter");
const btnCalc = document.querySelector(".calculate");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation:not(:last-child)");
let expressions = "";

console.log(numbers);
console.log(operations);

function calc(operation, a, b) {
   const operations = {
      sum: a + b,
      sub: a - b,
      multi: a * b,
      div: a / b,
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

btnClear.addEventListener("click", function () {
   outArea.textContent = "";
   expressions += "";
   console.log(expressions);
});
btnEdit.addEventListener("click", function () {
   outArea.textContent = outArea.innerHTML.slice(0, -1);
   expressions += outArea.innerHTML.slice(0, -1);
   console.log(expressions);
});

for (let i = 0; i < numbers.length; i++) {
   numbers[i].addEventListener("click", function () {
      outArea.textContent += numbers[i].innerHTML;
      expressions += numbers[i].innerHTML;
      console.log(expressions);
   });
}
for (let i = 0; i < operations.length; i++) {
   operations[i].addEventListener("click", function () {
      outArea.textContent += operations[i].innerHTML;
      expressions += operations[i].innerHTML;
      console.log(expressions);
   });
}
