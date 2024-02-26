let mascota = document.getElementById("eligeMascota");
let texto = document.getElementById("mascota");
let imagenMascota = document.getElementById("imagenMascota");
let tienda = document.getElementById("tienda");

function miMascota(){
    let miMascota = mascota.value;
    imagenMascota.style = "visibility:visible";
    tienda.style = "filter: grayscale(90%)"

    if (miMascota.toLowerCase() == "perro" || miMascota.toLowerCase() == "dog" ){
        imagenMascota.src = "/images/perro.png";
        texto.innerHTML = "Has elegido un Perro 🐶";
    }

    else if (miMascota.toLowerCase() == "gato" || miMascota.toLowerCase() == "cat" ){
        imagenMascota.src = "/images/gato.png";
        texto.innerHTML = "Aquí te traigo tu Gato 😺";
    }

    else if (miMascota.toLowerCase() == "hamster" || miMascota.toLowerCase() == "mouse" || miMascota.toLowerCase() == "raton"){
        imagenMascota.src = "/images/hamster.png";
        texto.innerHTML = "Un Hamster! ¿Quieres una bola para que corra? 🐹";
    }

    else if (miMascota.toLowerCase() == "pajaro" || miMascota.toLowerCase() == "bird" ){
        imagenMascota.src = "/images/pajaro.png";
        imagenMascota.style = "visibility:visible; transform: rotateY(-180deg)";
        texto.innerHTML = "Tu Pajaro, mejor te traigo al pajaro en una jaula 🐥";
    }

    else{
        imagenMascota.src = "/images/interrogante.png";
        texto.innerHTML = "¿Seguro no quieres una mascota? Vuelve a intentarlo.";
    }
}

function volverTienda(){
    imagenMascota.style = "visibility:hidden";
    texto.innerHTML = "🐶 🐈 ¿Que mascota elegirás? 🐥 🐹";
    tienda.style = "filter: grayscale(0%)"
}