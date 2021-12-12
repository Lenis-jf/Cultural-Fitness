const darkb = document.querySelector("#dark-mode-button__container");
const darkb2 = document.querySelector("#dark-mode-button__container--id");
const body = document.querySelector("body");
const main = document.querySelector("main");
var tmb = document.getElementById("tmb");
var exercise = document.getElementById("exercise");
const calculate = document.getElementById("calculate")
var plusValue;

load();

main.addEventListener("click", darClick);

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

calculate.addEventListener("click", calcularTmb);

function radioCheck() {
  if(document.getElementById("hombre").checked){
    plusValue = 5
  } else if(document.getElementById("mujer").checked) {
    plusValue = (-161);
  }
  return plusValue;
}

function calcularTmb() {
  let weightValue = document.getElementById("weight").value;
  let heightValue = document.getElementById("height").value;
  let ageValue = document.getElementById("age").value;

  radioCheck();

  let tmbValue = (10 * weightValue) + (6.25 * heightValue) - (5 * ageValue) + plusValue;

  document.getElementById("calculator-answer").innerHTML = "Tu tasa metabólica basal es de: " + tmbValue + " Cal";
}

// HOMBRES   TMB= (10 x peso de Kg) + (6,25 x altura en cm) – (5 x edad en años) +  5

// MUJERES     TMB= (10 x peso en kg) + (6,25 x altura en cm) – (5 x edad en años) – 161
