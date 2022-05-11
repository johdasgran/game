fetch("https://finalspaceapi.com/api/v0/character")
.then(resp => resp.json())
.then(datos => {
    console.log(datos[0].name)
})


min = 1
max = 20
console.log(Math.floor(Math.random() * (max - min) ) + min);

// Juego de memoria, recordar imagenes de personajes con la API Final Space,

// Jugar con animaciones al inico e iteractividad para el jugador xd

// GUardar puntaje en localStorage y recordar nombre