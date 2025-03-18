
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

//Declaramos 4 variables que contienen un array con 4 strings
  const sujeto = ['Mi perro travieso', ' Mi tía la loca', 'Mi gato', 'La ardilla del jardín']
  const accion = ['derramó cerveza en', 'destruyó accidentalmente ', 'lanzó por la ventana ', 'convirtió en confeti']
  const evitar = ['el proyecto de ciencias ', 'el informe mensual', 'las partituras', 'la presentación']
  const cuando = ['justo antes de salir', 'al medio día', 'hace dos días', 'antes de la presentacion']


//Funcion flecha GenerarExcusa retorna una posicion de cada uno de los arrays de forma aleatoria
  const GenerarExcusa = () => {
    return ` ${sujeto[Math.floor(Math.random() * sujeto.length)]} ${accion[Math.floor(Math.random() * accion.length)]}  
             ${evitar[Math.floor(Math.random() * evitar.length)]} ${cuando[Math.floor(Math.random() * cuando.length)]} `
  }

// Obtener el botonGenerarExcusa por su id
let botonGenerarExcusa = document.getElementById("GenerarExcusa");

// Función a ejecutar cuando se haga clic en el botón genera una nueva escusa
botonGenerarExcusa.onclick = function () {
    insertarExcusa();
};

// Obtener el elemento <p> por su id
let insertarTexto = document.getElementById("resultadoTexto");

// Función para generar y mostrar una excusa en p
const insertarExcusa = () => {
    insertarTexto.textContent =  GenerarExcusa();
};

// Llamar a la función cuando la página se carga
insertarExcusa();

}




