const nameUser = document.querySelector('#name');
const addName = document.querySelector('#addName');

const dataUser = localStorage.getItem('game');


console.log(JSON.parse(dataUser))

addName.addEventListener("click", (e)=>{
    console.log(nameUser.value);

    localStorage.setItem('game', JSON.stringify({
        'name': nameUser.value,
        'level': 0
    }))

})


setTimeout(()=> {

    const cards = document.querySelectorAll(".card-image");
    console.log(cards)

    const activeCard = document.querySelector(".card-image");

    console.log(activeCard);

    // activeCard.forEach((e, i) => {
    //     console.log(e.id)
    // })

    let count = 0;
    let pair = [];
  
    cards.forEach(e => {
        e.addEventListener("click", () => {
            console.log("click xd");
            e.style = "opacity: 1";
            e.classList = "card-image active";
           

            const active = document.querySelectorAll(".active")
            // console.log(active[count].attributes[1].value);
            pair.push(active[count].attributes[1].value);
            
            console.log(pair)

            if(pair.length === 2 && pair[0] === pair[1]) {
                console.log("WIiiiih xd")
            } else if(pair.length === 2 && pair[0] !== pair[1]) {
                count = 0
                pair.pop(0)
                pair.pop(0)

            }


            count++
            // console.log(count++)
        });
    })

    


    // activeCard.addEventListener("click", () => {
    //     console.log("click xd");
    // });




}, 200)

