function createCards(params) {
  cardsImage.forEach((element) => {
    // console.log(element.name);

    let container = document.querySelector("div#app");

    // Container image
    let card_image = document.createElement("div");
    card_image.id = "image";
    container.appendChild(card_image);

    // Image
    let image = document.createElement("img");
    image.src = element.img_url;
    image.classList = "card-image";
    card_image.appendChild(image);
  });
}



function shuffle(unArray) {
  var t = unArray.sort(function (a, b) {
    return Math.random() - 0.5;
  });
  return [...t];
}



function createGame(characters) {



}



function createLevel(params) {
  
  const arrayIds = [];
  const min = 1;
  const max = 47;

  for (let i = 0; arrayIds.length < 12; i++) {
    const n = Math.floor(Math.random() * (max - min)) + min;
    !arrayIds.includes(n) && arrayIds.push(n);
  }

  console.log(arrayIds);

  const arrayIdsPair = [...arrayIds, ...arrayIds];

  return shuffle(arrayIdsPair)
}



function cleanAPI(dataAPI) {
  const cleanAPI = [];
  for (const { id: id, name: name, img_url: img_url } of dataAPI) {
    cleanAPI.push({ id: id, name: name, img_url: img_url });
  }
  console.log(cleanAPI);
  return createGame(cleanAPI);
}

fetch("https://finalspaceapi.com/api/v0/character/") // ?limit=24
  .then((resp) => resp.json())
  .then((datos) => {
    return cleanAPI(datos);

    // const [{id, name, img_url}] = datos
    // console.log(id, name, img_url)
  });





















































/// LO que llevo hasta ahora xd!!

// function desordenar(unArray){
//     var t = unArray.sort(function(a,b) {return (Math.random()-0.5)});
//     return [...t];
//   }

// let arrayNumbers = [];

// const min = 1;
// const max = 47;

// for (let i = 0; arrayNumbers.length < 12; i++) {
//   const n = Math.floor(Math.random() * (max - min)) + min;
//   !arrayNumbers.includes(n) && arrayNumbers.push(n);
// }

// numerosDesordenados = [];

// for (i=0;i<1;i++){
//     x = desordenar(arrayNumbers);
//     numerosDesordenados[i] = x;
//   }

//   console.log(numerosDesordenados[0])

// // console.log(arrayNumbers);

// for (let i = 0; i < 12; i++) {
//   fetch(`https://finalspaceapi.com/api/v0/character/${arrayNumbers[i]}`)
//     .then((resp) => resp.json())
//     .then((datos) => {
//       // console.log(datos);
//       // const cardsImage = datos;

//       let container = document.querySelector("div#app");

//       // Container image
//       let card_image = document.createElement("div");
//       card_image.id = "image";
//       card_image.classList = "wobble-ver-right";
//       container.appendChild(card_image);

//       // Image
//       let image = document.createElement("img");
//       image.src = datos.img_url;
//       image.id = datos.id;
//       image.classList = `card-image ${datos.id}`;
//       card_image.appendChild(image);

//     });

// }

// // Juego de memoria, recordar imagenes de personajes con la API Final Space,
// // Jugar con animaciones al inico e iteractividad para el jugador xd
// // GUardar puntaje en localStorage y recordar nombre

//   for (let i = 0; i < 12; i++) {
//     fetch(`https://finalspaceapi.com/api/v0/character/${numerosDesordenados[0][i]}`)
//       .then((resp) => resp.json())
//       .then((datos) => {
//         // console.log(datos)
//         let container = document.querySelector("div#app");

//         // Container image
//         let card_image = document.createElement("div");
//         card_image.id = "image";
//         card_image.classList = "wobble-ver-right";
//         container.appendChild(card_image);

//         // Image
//         let image = document.createElement("img");
//         image.src = datos.img_url;
//         image.id = datos.id;
//         image.classList = `card-image ${datos.id}`;
//         card_image.appendChild(image);

//       });

//   }
