let bodyElement = document.body;
let randomColorGeneratorBtn = document.querySelector("#body-bgcolor-generator");

const generateRandomNumber = () => Math.round(Math.random() * 255);

randomColorGeneratorBtn.addEventListener("click", () => {
  let red = generateRandomNumber();
  let green = generateRandomNumber();
  let blue = generateRandomNumber();

  bodyElement.style.backgroundColor = `rgb(${red},${green},${blue})`;
});
