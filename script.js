const clearbutton = document.querySelector(".clear");
const displaywindow = document.querySelector(".display");
// console.log(clearbutton);

clearbutton.addEventListener("click", () => {
  const displaywindow = document.querySelector(".display");
  displaywindow.innerHTML = "<span></span>";
});

const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");

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

function main() {}
