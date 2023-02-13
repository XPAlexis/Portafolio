const iconoMenu = document.querySelector("#icon-menu"),
  menu = document.querySelector("#menu");

const cerrarBarra = document.querySelector("#click-Nav");

let animado = document.querySelectorAll(".animado");
let animadoDos = document.querySelectorAll(".animadoDos");

let animadoInicio = document.querySelector(".animadoInicio");

const preloader = document.querySelector(".preloader");

cerrarBarra.addEventListener("click", (e) => {
  menu.classList.toggle("active");
});

iconoMenu.addEventListener("click", (e) => {
  menu.classList.toggle("active");
  document.body.classList.toggle("opacity");

  const rutaActual = e.target.getAttribute("class");

  if (rutaActual == "fas fa-bars") {
    e.target.setAttribute("class", "fas fa-caret-down");
  } else {
    e.target.setAttribute("class", "fas fa-bars");
  }
});

function mostrar() {
  let scrollTop = document.documentElement.scrollTop;
  for (var i = 0; i < animado.length; i++) {
    let alturaAnimado = animado[i].offsetTop;
    if (alturaAnimado - 1100 < scrollTop) {
      animado[i].style.opacity = 1;
      animado[i].classList.add("desplazar");
    }
  }
}
function mostrarEfecto2() {
  let scrollTop = document.documentElement.scrollTop;
  for (var i = 0; i < animadoDos.length; i++) {
    let alturaAnimado = animadoDos[i].offsetTop;
    if (alturaAnimado - 1100 < scrollTop) {
      animadoDos[i].style.opacity = 1;
      animadoDos[i].classList.add("desplazarDos");
    }
  }
}

function mostrarInicio() {
  animadoInicio.style.opacity = 1;
  animadoInicio.classList.add("aparecer");
}

function stopLoader(){
  preloader.style.display = "none";
}

window.addEventListener("scroll", mostrar);
window.addEventListener("scroll", mostrarEfecto2);
window.addEventListener("load", mostrarInicio);
window.addEventListener("load", stopLoader);
