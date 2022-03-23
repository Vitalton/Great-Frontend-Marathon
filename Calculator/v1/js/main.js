const outArea = document.querySelector(".out");
const btnClear = document.querySelector(".clear");
const btnEdit = document.querySelector(".edit--enter");
const btnCalc = document.querySelector(".calculate");
const btnNumbers = document.querySelectorAll(".number");
const btnOperations = document.querySelectorAll(".operation:not(.calculate)");
const btnEqual = document.querySelector(".operation.calculate");

const data = {
   numbers: [],
   sign: "",
};

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

function checkSize(value) {
   if (value.length >= 10) {
      outArea.style.fontSize = "46px";
      outArea.style.lineHeight = "46px";
   } else if (value.length >= 7) {
      outArea.style.fontSize = "64px";
      outArea.style.lineHeight = "64px";
   } else {
      outArea.style.fontSize = "96px";
      outArea.style.lineHeight = "96px";
   }
}

function parseNumbers(string) {
   if (string.length === 0) return -1;
   const symbols = string.split("");
   let number = "";
   const result = [];
   for (const item of symbols) {
      if (/\d+/.test(item)) {
         number += item;
      } else if (item === ".") {
         number += item;
      } else {
         result.push(+number);
         number = "";
      }
   }
   number && result.push(+number);
   return result;
}

btnClear.addEventListener("click", () => {
   outArea.textContent = "";
   checkSize(outArea.textContent);
   data.numbers.length = 0;
   data.sign = "";
});
btnEdit.addEventListener("click", () => {
   outArea.textContent = outArea.textContent.slice(0, -1);
   checkSize(outArea.textContent);
});

btnNumbers.forEach((item) => {
   item.addEventListener("click", () => {
      outArea.textContent += item.dataset.value;
      checkSize(outArea.textContent);
   });
});
btnOperations.forEach((item) => {
   item.addEventListener("click", () => {
      outArea.textContent += item.textContent;
      checkSize(outArea.textContent);
      data.sign = item.dataset.value;
   });
});
btnEqual.addEventListener("click", () => {
   data.numbers = data.numbers.concat(parseNumbers(outArea.textContent));
   const { numbers, sign } = data;
   const result = +numbers.reduce((res, current) => calc(sign, res, current)).toFixed(5);
   outArea.textContent = result;
   checkSize(outArea.textContent);
   data.numbers.length = 0;
   data.sign = "";
});
