const darkb = document.querySelector("#dark-mode-button__container");
const darkb2 = document.querySelector("#dark-mode-button__container--id");
const body = document.querySelector("body");
const main = document.querySelector("main");
var height = document.getElementById("height");
var age = document.getElementById("age");
var tmb = document.getElementById("tmb");
var exercise = document.getElementById("exercise");
const calculate = document.getElementById("calculate")

load();

main.addEventListener("click", darClick);
calculate.addEventListener("click", darValor)

darkb.addEventListener("click", d => {
  body.classList.toggle("darkmode");
  store(body.classList.contains("darkmode"))
});

darkb2.addEventListener("click", d => {
  body.classList.toggle("darkmode");
  store(body.classList.contains("darkmode"))
});

function load() {
  const darkmode = localStorage.getItem("darkmode");

  if(!darkmode) {
    store("false");
  }else if(darkmode == "true") {
    body.classList.add("darkmode");
  }
}

function store(value) {
  localStorage.setItem("darkmode", value);
}

function darClick() {
  var menu = document.getElementById("check").checked

  if(menu) {
  var menu = document.getElementById("check").click();
  }
}

function darValor() {
  let weightValue = document.getElementById("weight").value;
  document.getElementById("calculator-answer-1").innerHTML = weightValue;
}
