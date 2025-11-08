// Clases

const estado = {
    vistaActual: 'overview',        // 'overview' o 'detalle'
    categoriaSeleccionada: null,    // Cual categoria esta seleccionada
    categoriaHovered: null          // Cual categoria esta en hover
};

const nombresCategorias = {
    'programacion': 'PROGRAMMING',
    'frameworks': 'FRAMEWORKS',
    'fisicas': 'PHYSICAL SKILLS',
    'soft': 'SOFT SKILLS'
};

// Elementos del documento

const segmentos = [...document.querySelectorAll('.segmento'), ...document.querySelectorAll('.cono')];
const textoCentral = document.getElementById('textoCentral');

// EventListeners

segmentos.forEach(segment => {
    segment.addEventListener('mouseenter', segmentoHover);
    segment.addEventListener('mouseleave', segmentoSalirHover);
    segment.addEventListener('click', segmentoSeleccion);
});

// Funciones

function segmentoHover(e){
    const categoria = e.target.dataset.category;

    estado.categoriaHovered = categoria;
    textoCentral.textContent = nombresCategorias[categoria];
}

function segmentoSalirHover(){
    estado.categoriaHovered = null;

    if (estado.categoriaSeleccionada === null)
        textoCentral.textContent = 'SKILLS';
    else
        textoCentral.textContent = estado.categoriaSeleccionada;
}

function segmentoSeleccion(e){
    const categoria = e.target.dataset.category;
    estado.categoriaSeleccionada = categoria;
    console.log(`Selected category: ${categoria}`);
}