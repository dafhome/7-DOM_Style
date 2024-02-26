let mascota = document.getElementById("eligeMascota");
let texto = document.getElementById("mascota");
let imagenMascota = document.getElementById("imagenMascota");
let tienda = document.getElementById("tienda");

function miMascota(){
    let miMascota = mascota.value;
    if (miMascota.toLowerCase() == "perro" || miMascota.toLowerCase() == "dog" ){
        imagenMascota.src = "/images/perro.png";
        imagenMascota.style = "visibility:visible";
        texto.innerHTML = "Has elegido un Perro 🐶";
        tienda.style = "filter: grayscale(90%)"
    }

    else if (miMascota.toLowerCase() == "gato" || miMascota.toLowerCase() == "cat" ){
        imagenMascota.src = "/images/gato.png";
        imagenMascota.style = "visibility:visible";
        texto.innerHTML = "Aquí te traigo tu Gato 😺";
        tienda.style = "filter: grayscale(90%)"
    }

    else if (miMascota.toLowerCase() == "hamster" || miMascota.toLowerCase() == "raton" ){
        imagenMascota.src = "/images/hamster.png";
        imagenMascota.style = "visibility:visible";
        texto.innerHTML = "Un Hamster! ¿Quieres una bola para que corra? 🐹";
        tienda.style = "filter: grayscale(90%)"
    }

    else if (miMascota.toLowerCase() == "pajaro" || miMascota.toLowerCase() == "bird" ){
        imagenMascota.src = "/images/pajaro.png";
        imagenMascota.style = "visibility:visible; transform: rotateY(-180deg)";
        texto.innerHTML = "Tu Pajaro, mejor te traigo al pajaro en una jaula 🐥";
        tienda.style = "filter: grayscale(90%)"
    }

    else{
        imagenMascota.src = "/images/interrogante.png";
        imagenMascota.style = "visibility:visible";
        texto.innerHTML = "¿Seguro no quieres una mascota? Vuelve a intentarlo.";
        tienda.style = "filter: grayscale(90%)"
    }
}
function volverTienda(){
    imagenMascota.style = "visibility:hidden";
    texto.innerHTML = "🐶 🐈 ¿Que mascota elegirás? 🐥 🐹";
    tienda.style = "filter: grayscale(0%)"
}