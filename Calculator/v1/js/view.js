const outArea = document.querySelector(".out");
const btnClear = document.querySelector(".clear");
const btnEdit = document.querySelector(".edit--enter");
const btnNumbers = document.querySelectorAll(".number");
const btnOperations = document.querySelectorAll(".operation:not(.calculate)");
const btnEqual = document.querySelector(".operation.calculate");

export { outArea, btnClear, btnEdit, btnNumbers, btnOperations, btnEqual };
