let currentstep = 1;

let form = document.querySelector(".container");
let inputsArr = [...form.querySelectorAll(".inputs")];
console.log(inputsArr);
console.log(inputsArr[1].dataset.step);
console.log(inputsArr[1].classList.contains("inputs"));
let sdf = inputsArr.find((d) => {
  return d.tagName === "DIV";
});
console.log(sdf);

form.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    // let currentInput = document.querySelector(
    //   `.inputs[data-step="${currentstep}"]`
    // );
    let currentInput = inputsArr[currentstep - 1];

    currentInput.classList.remove("active");
    if (e.target.classList.contains("next") && currentstep < 3) {
      currentstep += 1;
    } else if (e.target.classList.contains("prev") && currentstep > 1) {
      currentstep -= 1;
    }
    // currentInput = document.querySelector(
    //   `.inputs[data-step="${currentstep}"]`
    // );
    currentInput = inputsArr[currentstep - 1];

    currentInput.classList.add("active");
  }
});
