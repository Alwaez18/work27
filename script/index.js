
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const btnPlus = document.getElementById("btnPlus");
const btnMinus = document.getElementById("btnMinus");
const btnMNOZH = document.getElementById("btnMNOZH");
const btnDELIT = document.getElementById("btnDELIT");
const resultElement = document.getElementById("result");


function calculate(operation) {
  const value1 = parseFloat(num1.value); 
  const value2 = parseFloat(num2.value);

 
  if (isNaN(value1) || isNaN(value2)) 
    {
    resultElement.textContent = "Ошибка: введите числа!";
    return; 
    }
  let result;
  if (operation === "+") {result = value1 + value2; }
   if (operation === "*") {result = value1 * value2; }  
  else if (operation === "-") {result = value1 - value2; }
   else if (operation === "/") {result = value1 / value2; }


  resultElement.textContent = `Результат: ${result}`;
}


btnPlus.addEventListener("click", () => calculate("+"));
btnMinus.addEventListener("click", () => calculate("-"));
btnMNOZH.addEventListener("click", () => calculate("*"));
btnDELIT.addEventListener("click", () => calculate("/"));