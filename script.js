const clearbutton = document.querySelector(".clear");
const displaywindow = document.querySelector(".display");
// console.log(clearbutton);

clearbutton.addEventListener("click", () => {
  const displaywindow = document.querySelector(".display");
  displaywindow.innerHTML = "<span></span>";
});

const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const result = document.querySelector(".result");

for (const dig of digits) {
  dig.addEventListener("click", () => {
    displaywindow.textContent = displaywindow.textContent + dig.textContent;
    return dig.textContent;
  });
}

for (const op of operators) {
  op.addEventListener("click", () => {
    displaywindow.textContent = displaywindow.textContent + op.textContent;
    return op.textContent;
  });
}

function operate(num1, num2, operator) {
  let result = null;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 == 0) result = "I told you not to divide by 0 :/";
      result = num1 / num2;
      break;
  }

  return result;
}

result.addEventListener("click", () => {
  let inpStr = displaywindow.textContent;
  let num1,
    num2,
    op,
    output = null;
  if (inpStr.includes("+")) {
    let numarr = inpStr.split("+");
    num1 = Number(numarr[0]);
    num2 = Number(numarr[1]);
    op = "+";
    output = operate(num1, num2, op);
    displaywindow.textContent = output;
  } else if (inpStr.includes("-")) {
    let numarr = inpStr.split("-");
    num1 = Number(numarr[0]);
    num2 = Number(numarr[1]);
    op = "-";
    output = operate(num1, num2, op);
    displaywindow.textContent = output;
  } else if (inpStr.includes("*")) {
    let numarr = inpStr.split("*");
    num1 = Number(numarr[0]);
    num2 = Number(numarr[1]);
    op = "*";
    output = operate(num1, num2, op);
    displaywindow.textContent = output;
  } else if (inpStr.includes("/")) {
    let numarr = inpStr.split("/");
    num1 = Number(numarr[0]);
    num2 = Number(numarr[1]);
    op = "/";
    output = operate(num1, num2, op);
    displaywindow.textContent = output;
  } else {
  }
});
