load();

const darkbutton = document.querySelector("#dark-mode-button__container");
const body = document.querySelector("body");

darkbutton.addEventListener("click", darkmode => {
  body.classList.toggle("dark-mode");
  store(body.classList.contains("dark-mode"));
});

function load () {
  const darkState = localStorage.getItem("dark-mode");

  if(!darkState) {
    store("false")
  }else if(darkState == "true") {
    body.classList.add("dark-mode");
  }
}

function store (value) {
  localStorage.setItem("dark-mode", value)
}