const banderas = [
    "img/img.jpg", "img/img1.jpg", "img/img2.jpg", "img/img3.jfif", "img/img4.gif", 
    "img/img5.jpg", "img/img6.png", "img/img7.jpg", "img/img8.jpg", "img/img9.jpg",
    "img/img10.png", "img/img11.jpg", "img/img12.jpg", "img/img13.png", "img/img14.jpg",
    "img/img15.jpg", "img/img16.jfif", "img/img17.jpg", "img/img18.jpg", "img/img19.gif", 
   
];

const correcta = [1, 2, 3, 3, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 3, 2]; // Respuestas correctas actualizadas

const preguntas = [
    ["¿En qué año Bolivia declaró su independencia?", "1825", "1809", "1830"],
    ["¿Cuál es la capital constitucional de Bolivia?", "La Paz", "Sucre", "Cochabamba"],
    ["¿Qué cultura precolombina construyó Tiahuanaco?", "Los Incas", "Los Aymaras", "Los Tiahuanacotas"],
    ["¿Quién fue el primer presidente de Bolivia?", "Andrés de Santa Cruz", "Simón Bolívar", "Antonio José de Sucre"],
    ["¿Qué región de Bolivia es conocida por ser rica en gas natural?", "Altiplano", "Chaco", "Oriente"],
    ["¿Cuál es el río más largo de Bolivia?", "Río Beni", "Río Mamoré", "Río Desaguadero"],
    ["¿Qué mariscal boliviano dirigió la Confederación Perú-Boliviana?", "Mariano Melgarejo", "Andrés de Santa Cruz", "Germán Busch"],
    ["¿Cuál es la montaña más alta de Bolivia?", "Sajama", "Illimani", "Tunari"],
    ["¿Qué departamento boliviano tiene la mayor extensión territorial?", "Santa Cruz", "Potosí", "La Paz"],
    ["¿En qué año Bolivia perdió su acceso al mar durante la Guerra del Pacífico?", "1884", "1879", "1895"],
    ["¿Qué país limita al norte y al este con Bolivia?", "Chile", "Brasil", "Perú"],
    ["¿Qué presidente nacionalizó los hidrocarburos en Bolivia en 2006?", "Gonzalo Sánchez de Lozada", "Evo Morales", "Carlos Mesa"],
    ["¿Cuál es el lago navegable más alto del mundo que Bolivia comparte con Perú?", "Lago Poopó", "Lago Titicaca", "Laguna Colorada"],
    ["¿Qué grupo étnico es mayoritario en Bolivia?", "Quechua", "Aymara", "Guaraní"],
    ["¿Qué tratado definió la pérdida del litoral boliviano ante Chile?", "Tratado de Tlatelolco", "Tratado de Paz y Amistad", "Tratado de Ancón"],
    ["¿En qué departamento se encuentra el Salar de Uyuni?", "Oruro", "Potosí", "Tarija"],
    ["¿Qué animal aparece en el escudo de armas de Bolivia?", "Llama", "Cóndor", "Jaguar"],
    ["¿En qué fecha se celebra el Día de la Patria en Bolivia?", "22 de enero", "6 de agosto", "2 de noviembre"],
    ["¿Cuál es el idioma oficial junto con el español en Bolivia?", "Quechua", "Aymara", "Ambos"],
    ["¿Qué héroe boliviano luchó en la Guerra del Chaco?", "Eduardo Abaroa", "Germán Busch", "Antonio José de Sucre"]
];

let posActual = 0;
let cantidadAcertadas = 0;

function comenzarJuego() {
    posActual = 0;
    cantidadAcertadas = 0;
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarPregunta();
}

function cargarPregunta() {
    if (preguntas.length <= posActual) {
        terminarJuego();
    } else {
        limpiarOpciones();
        document.getElementById("imgBandera").src = banderas[posActual];
        document.getElementById("preguntaActual").innerHTML = preguntas[posActual][0];
        document.getElementById("n1").innerHTML = preguntas[posActual][1];
        document.getElementById("n2").innerHTML = preguntas[posActual][2];
        document.getElementById("n3").innerHTML = preguntas[posActual][3];
    }
}

function limpiarOpciones() {
    document.getElementById("n1").className = "nombre";
    document.getElementById("l1").className = "letra";
    document.getElementById("n2").className = "nombre";
    document.getElementById("l2").className = "letra";
    document.getElementById("n3").className = "nombre";
    document.getElementById("l3").className = "letra";
}

function comprobarRespuesta(opElegida) {
    if (opElegida === correcta[posActual]) {
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    } else {
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    setTimeout(cargarPregunta, 1000);
}

function terminarJuego() {
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = preguntas.length - cantidadAcertadas;
}

function volverAlInicio() {
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
}
