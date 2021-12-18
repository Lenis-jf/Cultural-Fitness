const darkb = document.querySelector("#dark-mode-button__container");
const darkb2 = document.querySelector("#dark-mode-button__container--id");
const body = document.querySelector("body");
const main = document.querySelector("main");
const calculate = document.getElementById("calculate")
const calculateAdelgazar = document.getElementById("calculate-2")
const calculateCrecer = document.getElementById("calculate-3")
var tmbValue;
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

function radioCheck() {
  if(document.getElementById("hombre").checked){
    plusValue = 5
  } else if(document.getElementById("mujer").checked) {
    plusValue = (-161);
  }
  return plusValue;
}

calculate.addEventListener("click", calcularTmb);

function calcularTmb() {
  let weightValue = document.getElementById("weight").value;
  let heightValue = document.getElementById("height").value;
  let ageValue = document.getElementById("age").value;

  radioCheck();

  tmbValue = (10 * weightValue) + (6.25 * heightValue) - (5 * ageValue) + plusValue;

  document.getElementById("calculator-answer-tmb").innerHTML = "Tu tasa metabólica basal es de: " + tmbValue + " Cal";
}

calculateAdelgazar.addEventListener("click", adelgazar);

function adelgazar() {
  const tmbFinalValue = document.getElementById("tmb").value;
  let exerciseOption = document.getElementById("exercise").value;
  var calParaAdelgazar;

  switch (exerciseOption) {
    case "Atleta":
      var calParaAdelgazar = (tmbFinalValue * 1.9) - 500;
      document.getElementById("calculator-answer-adelgazar").innerHTML = "Deberías consumir " + calParaAdelgazar + " Cal aproximadamente para adelgazar";
    break;
    case "Mucho":
      var calParaAdelgazar = (tmbFinalValue * 1.72) - 500;
      document.getElementById("calculator-answer-adelgazar").innerHTML = "Deberías consumir " + calParaAdelgazar + " Cal aproximadamente para adelgazar";
    break;
    case "Medio":
      var calParaAdelgazar = (tmbFinalValue * 1.55) - 500;
      document.getElementById("calculator-answer-adelgazar").innerHTML = "Deberías consumir " + calParaAdelgazar + " Cal aproximadamente para adelgazar";
    break;
    case "Ligero":
      var calParaAdelgazar = (tmbFinalValue * 1.375) - 500;
      document.getElementById("calculator-answer-adelgazar").innerHTML = "Deberías consumir " + calParaAdelgazar + " Cal aproximadamente para adelgazar";
    break;
    case "Poco":
      var calParaAdelgazar = (tmbFinalValue * 1.2) - 500;
      document.getElementById("calculator-answer-adelgazar").innerHTML = "Deberías consumir " + calParaAdelgazar + " Cal aproximadamente para adelgazar";
    break;
    case "Nada":
      document.getElementById("calculator-answer-adelgazar").innerHTML = "No te rindas, levantate y cambia tu vida, ¡nosotros creemos en ti!";
    break;
    default:
      document.getElementById("calculator-answer-adelgazar").innerHTML = "Por favor escoge una de las opciones anteriores"
  }
}

calculateCrecer.addEventListener("click", crecer);

function crecer() {
  const tmbFinalValue = document.getElementById("tmb-2").value;
  let exerciseOption = document.getElementById("exercise-2").value;
  var calParaCrecer;
  switch (exerciseOption) {
    case "Atleta":
      var calParaCrecer = (tmbFinalValue * 1.9) + 500;
      document.getElementById("calculator-answer-crecer").innerHTML = "Deberías consumir " + calParaCrecer + " Cal aproximadamente para crecer";
    break;
    case "Mucho":
      var calParaCrecer = (tmbFinalValue * 1.72) + 500;
      document.getElementById("calculator-answer-crecer").innerHTML = "Deberías consumir " + calParaCrecer + " Cal aproximadamente para crecer";
    break;
    case "Medio":
      var calParaCrecer = (tmbFinalValue * 1.55) + 500;
      document.getElementById("calculator-answer-crecer").innerHTML = "Deberías consumir " + calParaCrecer + " Cal aproximadamente para crecer";
    break;
    case "Ligero":
      var calParaCrecer = (tmbFinalValue * 1.375) + 500;
      document.getElementById("calculator-answer-crecer").innerHTML = "Deberías consumir " + calParaCrecer + " Cal aproximadamente para crecer";
    break;
    case "Poco":
      var calParaCrecer = (tmbFinalValue * 1.2) + 500;
      document.getElementById("calculator-answer-crecer").innerHTML = "Deberías consumir " + calParaCrecer + " Cal aproximadamente para crecer";
    break;
    case "Nada":
      document.getElementById("calculator-answer-crecer").innerHTML = "No te rindas, levantate y cambia tu vida, ¡nosotros creemos en ti!";
    break;
    default:
      document.getElementById("calculator-answer-crecer").innerHTML = "Por favor escoge una de las opciones anteriores"
  }
}