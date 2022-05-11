fetch("https://finalspaceapi.com/api/v0/character")
.then(resp => resp.json())
.then(datos => {
    console.log(datos[0].name)
})

g