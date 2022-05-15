fetch("https://finalspaceapi.com/api/v0/character")
.then(resp => resp.json())
.then(datos => {
    console.log(datos);
    const cardsImage = datos;
    cardsImage.forEach(element => {
        console.log(element.name);

        let container = document.querySelector("main.main");
    
         // Container image
         let card_image = document.createElement("div");
         card_image.id = "image";
         container.appendChild(card_image);
   
         // Image
         let image = document.createElement("img");
         image.src = element.img_url;
         card_image.appendChild(image);
    });
    


})


min = 1
max = 20
console.log(Math.floor(Math.random() * (max - min) ) + min);



// Juego de memoria, recordar imagenes de personajes con la API Final Space,
// Jugar con animaciones al inico e iteractividad para el jugador xd
// GUardar puntaje en localStorage y recordar nombre