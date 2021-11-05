const darkb = document.querySelector("#dark-mode-button__container");
const body = document.querySelector("body");

load();

darkb.addEventListener("click", d => {
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

// load();

// const darkbutton = document.querySelector("#dark-mode-button__container");
// const body = document.querySelector("body");

// darkbutton.addEventListener("click", darkmode => {
//   body.classList.toggle("dark-mode");
//   store(body.classList.contains("dark-mode"));
// });

// function load () {
//   const darkState = localStorage.getItem("dark-mode");

//   if(!darkState) {
//     store("false")
//   }else if(darkState == "true") {
//     body.classList.add("dark-mode");
//   }
// }

// function store (value) {
//   localStorage.setItem("dark-mode", value)
// }