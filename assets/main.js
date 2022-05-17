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


const activeCard = document.querySelectorAll(".card-image");

console.log(activeCard)