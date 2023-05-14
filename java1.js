let botonCambiarNombre = document.querySelector("#cambiar-nombre")
let botonCambiarColor = document.querySelector("#cambiar-color")
let botonCambiarEnlace = document.querySelector("#cambiar-enlace")
let botonMostrarElemento = document.querySelector("#mostrar-elemento")
let nombre = document.querySelectorAll(".nombre-cambio")

//Cambiamos el nombre del h1 y el que esta antes de los list items
botonCambiarNombre.addEventListener("click",function () {

    //Obtenemos el nombre que el usuario ingreso en el input de cambiar nombre
    let nuevoValor = document.querySelector("#nombre").value

    //Colocamos el nuevo nombre en cada sitio que se encuentre
    nombre.forEach(elem => {
        elem.textContent = nuevoValor
    })
})

botonCambiarColor.addEventListener("change", function() {

    //Almacenar la opcion del color que selecciono el usuario
    let opcion = botonCambiarColor.value

    //Agregar el nuevo color en cada sitio que se encuentre el nombre
    nombre.forEach(elem => {

    // Si la cantidad de clases del elemento tiene una longitud de 2 quiere decir que anteriormente se le cambio el color, por lo tanto se reemplazara el color seleccionado anteriormente con el actual. De lo contrario quiere decir que es la primera vez que se cambia el color por lo tanto simplemente se agrega
    if (elem.classList.length == 2) {
        elem.classList.replace(elem.classList[1],opcion)
    } else {
        elem.classList.add(opcion)
    }
    })
})

//Reemplazamos el enlace viejo por el actual introducido en el input
botonCambiarEnlace.addEventListener("click", function () {
    let enlaceNuevo = document.querySelector("#enlace").value
    let enlaceViejo = document.querySelector(".enlace")
    enlaceViejo.href = enlaceNuevo
})

//Mostramos el 3 elemento de la lista
botonMostrarElemento.addEventListener("click",function() {
    alert(document.querySelector(".lista").children[2].textContent);
})