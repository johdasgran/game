

function initGame(params) {

    const cards = document.querySelectorAll(".card-image");
    console.log(cards)

    let count = 0;
    let pair = [];
  
    

    cards.forEach((e, i) => {
        // console.log(e.id)

        e.addEventListener("click", ()=> {
          console.log(e.id)

          pair.push(e.id)

  
            e.style = "opacity: 1";
            e.classList = "card-image active";
      

         const active = document.querySelectorAll(".active")
          console.log(active)


          if(pair.length === 2 && pair[0] === pair[1]){
            active[0].classList = "card-image win";
            active[1].classList = "card-image win";
            console.log("wiii")
            pair.pop(0)
            pair.pop(0)
          } else if (pair.length === 2 && pair[0] !== pair[1]){
            active[0].classList = "card-image";
            active[1].classList = "card-image";
            setTimeout(()=>{
              active[0].style = "";
              active[1].style = "";
            }, 800)
            console.log("buuuhh")
            pair.pop(0)
            pair.pop(0)
          } else if (pair.length === 2){
            active[0].classList = "card-image";
            active[1].classList = "card-image";
            setTimeout(()=>{
              active[0].style = "";
              active[1].style = "";
            }, 200)

            console.log(active)
            pair.pop(0)
            pair.pop(0)
            // count = 0
          }


        })
    })


    
}





function createGame(characters) {
  console.log(characters);

  const idCard = createLevel();

  idCard.forEach((element) => {
    const { id, name, img_url } = characters[element];
    // console.log(id, name, img_url);

      let container = document.querySelector("div#app");

      // Container image
      let card_image = document.createElement("div");
      card_image.id = "image";
      card_image.classList = "wobble-ver-right";
      container.appendChild(card_image);

      // Image
      let image = document.createElement("img");
      image.src = img_url;
      image.id = id;
      image.classList = `card-image ${id}`;
      card_image.appendChild(image);
  });

  initGame();

}



function shuffle(arrayWithIds) {
  const shuffleArray = arrayWithIds.sort(function (a, b) {
    return Math.random() - 0.5;
  });
  return shuffleArray;
}



function createLevel(params) {
  const arrayIds = [];
  const min = 1;
  const max = 47;

  for (let i = 0; arrayIds.length < 12; i++) {
    const n = Math.floor(Math.random() * (max - min)) + min;
    !arrayIds.includes(n) && arrayIds.push(n);
  }

  // console.log(arrayIds);

  const arrayIdsPair = [...arrayIds, ...arrayIds];

  // console.log(shuffle(arrayIdsPair))

  return shuffle(arrayIdsPair);
}



function cleanAPI(dataAPI) {
  const cleanAPI = [];
  for (const { id: id, name: name, img_url: img_url } of dataAPI) {
    cleanAPI.push({ id: id, name: name, img_url: img_url });
  }
  // console.log(cleanAPI);
  return createGame(cleanAPI);
}



fetch("https://finalspaceapi.com/api/v0/character/") // ?limit=24
  .then((resp) => resp.json())
  .then((datos) => {
    return cleanAPI(datos);

    // const [{id, name, img_url}] = datos
    // console.log(id, name, img_url)
  });




// // Juego de memoria, recordar imagenes de personajes con la API Final Space,
// // Jugar con animaciones al inico e iteractividad para el jugador xd
// // GUardar puntaje en localStorage y recordar nombre
