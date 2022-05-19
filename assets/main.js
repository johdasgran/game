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

addName.addEventListener("click", (e)=>{
    console.log(nameUser.value);

    localStorage.setItem('game', JSON.stringify({
        'name': nameUser.value,
        'level': 1
    }))

    setTimeout(()=> {
        startOne.classList = "start-one disabled";
    }, 300)

    setTimeout(()=>{
        console.log("600ms")
        console.log(app.classList = "bounce-in-right enable")
    }, 600)

})




