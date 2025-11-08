// Elementos del documento
const botonesMenu = document.querySelectorAll('.navegacion__item');

// Assets y recursos
const swoosh = new Audio('assets/audio/swoosh.mp3');

// EventListeners
botonesMenu.forEach(item => {item.addEventListener('mouseenter', sonidoSwoosh)});

// Funciones

function sonidoSwoosh(){
    console.log("Hovering.");
    swoosh.play();
}