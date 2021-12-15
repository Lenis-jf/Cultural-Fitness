const darkb = document.querySelector("#dark-mode-button__container");
const darkb2 = document.querySelector("#dark-mode-button__container--id");
const body = document.querySelector("body");
const main = document.querySelector("main");
const calculate = document.getElementById("calculate")
const calculateAdelgazar = document.getElementById("calculate-2")
const calculateEngordar = document.getElementById("calculate-3")
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

calculateAdelgazar.addEventListener("click", adelgazar);

function adelgazar() {
  let tmbFinalValue = document.getElementById("tmb").value;
  let exerciseValue = document.getElementById("exercise").value;

  switch (exerciseValue) {
    case "Atleta":
      let calParaAdelgazar = tmbFinalValue * 1.9;
      document.getElementById("calculator-answer").innerHTML = "Deberías consumir " + calParaAdelgazar + " Cal aproximadamente para adelgazar";
    break;
    case "Mucho":
      let calParaAdelgazar = tmbFinalValue * 1.72;
      document.getElementById("calculator-answer").innerHTML = "Deberías consumir " + calParaAdelgazar + " Cal aproximadamente para adelgazar";
    break;
    case "Medio":
      let calParaAdelgazar = tmbFinalValue * 1.55;
      document.getElementById("calculator-answer").innerHTML = "Deberías consumir " + calParaAdelgazar + " Cal aproximadamente para adelgazar";
    break;
    case "Ligero":
      let calParaAdelgazar = tmbFinalValue * 1.375;
      document.getElementById("calculator-answer").innerHTML = "Deberías consumir " + calParaAdelgazar + " Cal aproximadamente para adelgazar";
    break;
    case "Poco":
      let calParaAdelgazar = tmbFinalValue * 1.2;
      document.getElementById("calculator-answer").innerHTML = "Deberías consumir " + calParaAdelgazar + " Cal aproximadamente para adelgazar";
    break;
    case "Nada":
      document.getElementById("calculator-answer").innerHTML = "No te rindas, levantate y cambia tu vida, ¡nosotros creemos en ti!";
    break;
    default:
      document.getElementById("calculator-answer").innerHTML = "Por favor escoge una de las opciones anteriores"
  }
}

// HOMBRES   TMB= (10 x peso de Kg) + (6,25 x altura en cm) – (5 x edad en años) +  5

// MUJERES     TMB= (10 x peso en kg) + (6,25 x altura en cm) – (5 x edad en años) – 161

// TMB x 1,2: Poco o ningún ejercicio
// TMB x 1,375: Ejercicio ligero (1 a 3 días en semana)
// TMB x 1,55: Ejercicio moderado (3 a 5 días en semana)
// TMB x 1,72: Deportista (6 -7 días en semana)
// TMB x 1,9: Atleta profesional (entrenamientos de mañana y tarde)
