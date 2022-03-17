function showVerticalMessage(str) {
   if (str.length > 1) {
      let temp = str.split("");
      temp.length > 10 && (temp.length = 10);
      temp[0] = temp[0] === "м" ? temp[0].toUpperCase() : temp[0];
      return temp.join("\n");
   } else return "Error: empty string";
}

console.log(showVerticalMessage("марафон"));
