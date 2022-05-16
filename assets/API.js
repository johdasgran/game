// fetch("https://finalspaceapi.com/api/v0/character/") // ?limit=24
//   .then((resp) => resp.json())
//   .then((datos) => {
//     // console.log(datos);
//     const cardsImage = datos;
//     console.log(cardsImage)
//     // let arrayNumbers = [];

//     // const min = 1;
//     // const max = 47;
    
//     // for (let i = 0; arrayNumbers.length < 10; i++) {
//     //   const n = Math.floor(Math.random() * (max - min)) + min;
//     //   !arrayNumbers.includes(n) && arrayNumbers.push(n);
//     // }

//     // console.log(arrayNumbers)

//     // const cardsShow = [];

//     // cardsImage.forEach((e, index) => {
//     //    cardsShow.push()
//     //    console.log(e)
//     // });
//     // console.log(cardsShow)


//     cardsImage.forEach((element) => {
//       // console.log(element.name);

//       let container = document.querySelector("div#app");

//       // Container image
//       let card_image = document.createElement("div");
//       card_image.id = "image";
//       container.appendChild(card_image);

//       // Image
//     //   let image = document.createElement("img");
//     //   image.src = element.img_url;
//     //   image.classList = "card-image";
//     //   card_image.appendChild(image);
//     });
//   });










function desordenar(unArray){
    var t = unArray.sort(function(a,b) {return (Math.random()-0.5)});
    return [...t];
  } // esta función me desordena un array
  

// xdddddddddddd////////////////////

  
let arrayNumbers = [];

const min = 1;
const max = 47;

for (let i = 0; arrayNumbers.length < 12; i++) {
  const n = Math.floor(Math.random() * (max - min)) + min;
  !arrayNumbers.includes(n) && arrayNumbers.push(n);
}

numerosDesordenados = [];

for (i=0;i<1;i++){ //creo bucle para llenar array vacío
    x = desordenar(arrayNumbers);
    numerosDesordenados[i] = x;
    // console.log(i,x);
  }

  console.log(numerosDesordenados[0])

// console.log(arrayNumbers);

for (let i = 0; i < 12; i++) {
  fetch(`https://finalspaceapi.com/api/v0/character/${arrayNumbers[i]}`)
    .then((resp) => resp.json())
    .then((datos) => {
      console.log(datos);
      const cardsImage = datos;

      let container = document.querySelector("div#app");

      // Container image
      let card_image = document.createElement("div");
      card_image.id = "image";
      container.appendChild(card_image);

      // Image
      let image = document.createElement("img");
      image.src = datos.img_url;
      image.classList = "card-image";
      card_image.appendChild(image);

    //    // Container image
    //    let card = document.createElement("div");
    //    card.id = "image";
    //    container.appendChild(card);
 
    //    // Image
    //    let imag = document.createElement("img");
    //    imag.src = datos.img_url;
    //    imag.classList = "card-image";
    //    card.appendChild(imag);

    });

}



// Juego de memoria, recordar imagenes de personajes con la API Final Space,
// Jugar con animaciones al inico e iteractividad para el jugador xd
// GUardar puntaje en localStorage y recordar nombre


  
//   console.log(numerosDesordenados);


  for (let i = 0; i < 12; i++) {
    fetch(`https://finalspaceapi.com/api/v0/character/${numerosDesordenados[0][i]}`)
      .then((resp) => resp.json())
      .then((datos) => {
        console.log(datos);
        const cardsImage = datos;
  
        let container = document.querySelector("div#app");
  
        // Container image
        let card_image = document.createElement("div");
        card_image.id = "image";
        container.appendChild(card_image);
  
        // Image
        let image = document.createElement("img");
        image.src = datos.img_url;
        image.classList = "card-image";
        card_image.appendChild(image);
  
      });
  
  }
  