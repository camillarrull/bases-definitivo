//TARJETAS
const recetarios = [
    {
        "id": 1,
        "titulo": "Recetas dulces",
        "imagen": './img/recetasDulces.jpeg',
        "precio": 500


    },
    {
        "id": 2,
        "titulo": "Recetas saladas",
        "imagen": './img/recSaladas1.jpeg',
        "precio": 500
    },

]
const modulos = [
    {
        "id": 1,
        "titulo": "Primer modulo",
        "descripcion": "Porque creemos que la organización es la base, el primer módulo es sobre organización, almacenamiento e ideas prácticas para llevar a cabo.",
        "imagen": './img/chicasVideo.png',
        "precio": 1800
    }
]
const modulosInfo = [
    {
        "id": 1,
        "titulo": "PRIMER MODULO",
        "descripcion": "En este modulo encontrarás dos archivos pdfs y dos videos en donde te explicamos la importancia sobre la organización, el almacenamiento y te ofrecemos ideas prácticas para que lleves a cabo.<br> Como podes ver en la foto, uno de los pdf abarca todo lo que describe en el indice.<br> En el segundo, te ofrecemos una lista de infaltables para que tomes lo que te sirva y después puedas armar la tuya propia!(para esto te adjuntamos un modelo para que puedas imprimir).<br>Por último, te dejamos también una guía de emprendedores de Córdoba para que puedan aprovechar!",
        "imagen": './img/organizacion.png',

    }
]
window.onload = cargaPagina;
function cargaPagina() {
    crearTarjetas();
    crearTarjetasModulos();
    crearTarjetasModulosInfo();
    abrirModalModulo();
    cerrarModalModulo();
    eventos();
}

function crearTarjetas() {
    for (const receta of recetarios) {
        const containterTarjetas = document.getElementById('tarjetas');
        let card = document.createElement('div')
        card.classList.add('estiloTarjeta')
        containterTarjetas.appendChild(card)
        let foto = document.createElement('img')
        foto.src = receta.imagen;
        foto.classList.add('estiloImagen')
        card.appendChild(foto)
        let titulo = document.createElement("p")
        titulo.innerHTML = receta.titulo
        titulo.classList.add('tituloRecetario')
        card.appendChild(titulo)
        let precioRecetario = document.createElement("p")
        precioRecetario.innerHTML = "$" + receta.precio
        precioRecetario.classList.add('precioRecetario')
        card.appendChild(precioRecetario)
        let botonRecetario = document.createElement('button')
        botonRecetario.innerHTML = 'Comprar'
        botonRecetario.classList.add('botonRecetario')
        botonRecetario.setAttribute('id', 'btn' + receta.id)
        card.appendChild(botonRecetario)



    }
}
function crearTarjetasModulos() {
    for (const modulo of modulos) {
        const containterTarjetas = document.getElementById('tarjetaModulos');
        let card = document.createElement('div')
        card.classList.add('estiloTarjetaModulo')
        containterTarjetas.appendChild(card)
        let fotoContainer = document.createElement('div')
        let foto = document.createElement('img')
        foto.src = modulo.imagen;
        foto.classList.add('estiloImagenModulo')
        card.appendChild(fotoContainer)
        fotoContainer.appendChild(foto)
        fotoContainer.classList.add('fotoContainer')
        let infoContainer = document.createElement('div')
        let titulo = document.createElement("p")
        titulo.innerHTML = modulo.titulo
        titulo.classList.add('tituloModulo')
        card.appendChild(infoContainer)
        infoContainer.appendChild(titulo)
        infoContainer.classList.add('infoContainer')
        let descripcion = document.createElement("p")
        descripcion.innerHTML = modulo.descripcion
        descripcion.classList.add('descripcionModulo')
        infoContainer.appendChild(descripcion)
        let precioModulo = document.createElement("p")
        precioModulo.innerHTML = "$" + modulo.precio
        precioModulo.classList.add('precioModulo')
        infoContainer.appendChild(precioModulo)
        let botonModulo = document.createElement('button')
        botonModulo.innerHTML = 'Comprar'
        botonModulo.classList.add('botonModulo')
        botonModulo.setAttribute('id', 'botonModulo')
        infoContainer.appendChild(botonModulo)



    }
}
function crearTarjetasModulosInfo() {
    for (const moduloInfo of modulosInfo) {
        const containterTarjetas = document.getElementById('modulos');
        let card = document.createElement('div')
        card.classList.add('estiloTarjetaModuloInfo')
        containterTarjetas.appendChild(card)
        let fotoContainer = document.createElement('div')
        let foto = document.createElement('img')
        foto.src = moduloInfo.imagen;
        foto.classList.add('estiloImagenModuloInfo')
        card.appendChild(fotoContainer)
        fotoContainer.appendChild(foto)
        fotoContainer.classList.add('fotoContainerModuloInfo')
        let infoContainer = document.createElement('div')
        let span = document.createElement('SPAN')
        let cruzModulo = document.createElement('I')
        cruzModulo.setAttribute('class', "fas fa-times")
        span.appendChild(cruzModulo)
        cruzModulo.setAttribute('id', 'cruzModulo')
        infoContainer.appendChild(span)

        let titulo = document.createElement("p")
        titulo.innerHTML = moduloInfo.titulo
        titulo.classList.add('tituloModuloInfo')
        card.appendChild(infoContainer)
        infoContainer.appendChild(titulo)
        infoContainer.classList.add('infoContainerModuloInfo')
        let descripcion = document.createElement("p")
        descripcion.innerHTML = moduloInfo.descripcion
        descripcion.classList.add('descripcionModuloInfo')
        infoContainer.appendChild(descripcion)

        var f = document.createElement("form");
        f.setAttribute('method', "post");
        f.setAttribute('action', "http://localhost:3001/checkout");
        var i = document.createElement("input"); //input element, text
        i.setAttribute('type', "hidden");
        i.setAttribute('name', "id");
        i.setAttribute('value', "id");
        var s = document.createElement("input"); //input element, Submit button
        s.setAttribute('type', "submit");
        s.setAttribute('value', "Comprar ahora");
        s.setAttribute('class', "button");
        f.appendChild(i);
        f.appendChild(s);
        infoContainer.appendChild(f)


    }
}


//INFO RECETAS

function apareceMenuDulce() {
    let tarjetas = document.getElementById('tarjetas')
    let recetario = document.getElementById('contenedorIndice')
    document.body.addEventListener("click", () => {
        recetario.style.display = 'flex';
        tarjetas.style.display = 'none'
    });

}
function desapareceMenuDulce() {
    let tarjetas = document.getElementById('tarjetas')
    let recetario = document.getElementById('contenedorIndice')
    document.body.addEventListener("click", () => {
        recetario.style.display = 'none';
        tarjetas.style.display = 'flex'
    });
}

function apareceMenuSalado() {
    let tarjetas = document.getElementById('tarjetas')
    let recetario = document.getElementById('contenedorIndiceSalado')
    document.body.addEventListener("click", () => {
        recetario.style.display = 'flex';
        tarjetas.style.display = 'none'
    });

}
function desapareceMenuSalado() {
    let tarjetas = document.getElementById('tarjetas')
    let recetario = document.getElementById('contenedorIndiceSalado')
    document.body.addEventListener("click", () => {
        recetario.style.display = 'none';
        tarjetas.style.display = 'flex'
    });
}
function abrirModalFormulario() {
    let modal = document.getElementById('modal')
    document.body.addEventListener('click', () => {
        modal.style.display = 'flex'
    })
}
function cerrarModalFormulario() {
    let tarjetas = document.getElementById('tarjetas')
    let recetarioSalado = document.getElementById('contenedorIndiceSalado')
    let recetarioDulce = document.getElementById('contenedorIndice')
    let modal = document.getElementById('modal')
    document.body.addEventListener('click', () => {
        modal.style.display = 'none';
        recetarioDulce.style.display = 'none'
        recetarioSalado.style.display = 'none'
        tarjetas.style.display = 'flex'
    })
}

function abrirModalModulo() {
    let modal = document.getElementById('modulos')
    let tarjetas = document.getElementById('tarjetaModulos')
    document.body.addEventListener('click', () => {
        modal.style.display = 'flex';
        tarjetas.style.display = 'none';
    })
}
function cerrarModalModulo() {
    let tarjetas = document.getElementById('tarjetaModulos')
    let modulos = document.getElementById('modulos')

    document.body.addEventListener('click', () => {
        modulos.style.display = 'none';
        tarjetas.style.display = 'flex';
    })
}



function eventos() {

    document.getElementById("btn1").addEventListener("click", apareceMenuDulce);
    document.getElementById("cruz").addEventListener("click", desapareceMenuDulce);
    document.getElementById("btn2").addEventListener("click", apareceMenuSalado);
    document.getElementById("cruzSaladas").addEventListener("click", desapareceMenuSalado);
    document.getElementById('btnSalado').addEventListener('click', abrirModalFormulario);
    document.getElementById('btnDulce').addEventListener('click', abrirModalFormulario);
    document.getElementById('botonModulo').addEventListener('click', abrirModalModulo);
    document.getElementById("cruzModulo").addEventListener("click", cerrarModalModulo);

}

