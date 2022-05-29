const nameUser = document.querySelector('#name');
const addName = document.querySelector('#addName');

const startOne = document.querySelector("#start-one");
const app = document.querySelector("#app");

// const dataUser = localStorage.getItem('game');
// console.log(JSON.parse(dataUser))

export function updateLocaStorage(level) {
    const updateLS = localStorage.getItem('game')
    console.log(JSON.parse(updateLS))
  
    localStorage.setItem('game', JSON.stringify({
      'name': nameUser.value,
      'level': level
  }))
}



const one = document.querySelector(".one")

addName.addEventListener("click", (e)=>{
    console.log(nameUser.value);


    localStorage.setItem('game', JSON.stringify({
        'name': nameUser.value,
        'level': 1
    }))

    setTimeout(()=> {
        startOne.classList = "start-one disabled";
        one.classList = "nextToLevel one scale-in-center enable";
    }, 300)

    setTimeout(()=> {
        one.classList = "nextToLevel one scale-in-center disabled";
    }, 2050)

    setTimeout(()=>{
        console.log("600ms")
        console.log(app.classList = "bounce-in-right enable")
    }, 2100)

})




