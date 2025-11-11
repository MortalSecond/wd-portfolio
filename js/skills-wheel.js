import localizacionEN from '../locales/en.json' with {type: 'json'};
import localizacionES from '../locales/es.json' with {type: 'json'};

var localizacion = localizacionEN;

// Clases

const state = {
    vistaActual: 'overview',        // 'overview' o 'detalle'
    categoriaSeleccionada: null,    // Cual categoria esta seleccionada
    categoriaHovered: null          // Cual categoria esta en hover
};

const nombresCategorias = {
    'programacion': localizacion.habilidades.programacion,
    'frameworks': localizacion.habilidades.frameworks,
    'fisicas': localizacion.habilidades.habilidadesBlandas,
    'soft': localizacion.habilidades.habilidadesFisicas
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

// Funciones UI

function segmentoHover(e){
    const categoria = obtenerTipoDeCategoria(e);

    state.categoriaHovered = categoria;
    
    textoCentral.textContent = state.categoriaHovered;
}

function segmentoSalirHover(){
    state.categoriaHovered = null;

    if (state.categoriaSeleccionada == null)
        textoCentral.textContent = 'SKILLS';
    else
        textoCentral.textContent = state.categoriaSeleccionada;
}

function segmentoSeleccion(e){
    const categoria = obtenerTipoDeCategoria(e);

    state.categoriaSeleccionada = categoria;
    console.log(`Selected category: ${categoria}`);
}

// Funciones de Utilidad

function obtenerTipoDeCategoria(e){
    const categoria = e.target.dataset.category;

    switch(categoria){
        case 'programacion':
            return nombresCategorias.programacion;
        case 'frameworks':
            return nombresCategorias.frameworks;
        case 'fisicas':
            return nombresCategorias.fisicas;
        case 'soft':
            return nombresCategorias.soft;
        default:
            return ''
    }
}