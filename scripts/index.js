

//*Creacion de elementos HTML

//*MAIN SECTION
const mainSection = document.createElement("section");
mainSection.classList.add("main-section")


const movieContainer = document.getElementsByClassName('movie-container')[0]

//*MOVIE CARD

function crearMovieCard(objetoDeTempData) {

    const titulo = objetoDeTempData.title
    const año = objetoDeTempData.year
    const director = objetoDeTempData.director
    const duracion = objetoDeTempData.duration
    const genero = objetoDeTempData.genre
    const ranking = objetoDeTempData.rate
    const poster = objetoDeTempData.poster

    const movieCard1 = document.createElement("div");
    movieCard1.classList.add("movie-card")
    movieCard1.classList.add("card1")
    movieCard1.addEventListener("click", () => {console.log('Clic en la movieCard1')})
    // console.log(movieCard1)

    const imgMovieCard = document.createElement("img")
    imgMovieCard.classList.add("movie-image")
    imgMovieCard.src = poster;
    imgMovieCard.alt = titulo;
    
    const movieInfo = document.createElement("div");
    movieInfo.classList.add("movie-info")
    // console.log(movieInfo)
    
    const h3MovieInfo = document.createElement("h3")
    h3MovieInfo.innerHTML = titulo;
    
    const pMovieInfoAño = document.createElement("p")
    pMovieInfoAño.innerHTML = `Año: ${año}`
    
    const pMovieInfoDirector = document.createElement("p")
    pMovieInfoDirector.innerHTML = `Director: ${director}`
    
    const pMovieInfoDuracion = document.createElement("p")
    pMovieInfoDuracion.innerHTML = `Duración: ${duracion}`

    const pMovieInfoGenero = document.createElement("p")
    pMovieInfoGenero.innerHTML = `Genero: ${genero}`

    const pMovieInfoRanking = document.createElement("p")
    pMovieInfoRanking.innerHTML = `Ranking: ${ranking}`



    //*Agregar elementos
    
    movieInfo.appendChild(h3MovieInfo)
    movieInfo.appendChild(pMovieInfoAño)
    movieInfo.appendChild(pMovieInfoDirector)
    movieInfo.appendChild(pMovieInfoDuracion)
    movieInfo.appendChild(pMovieInfoGenero)
    movieInfo.appendChild(pMovieInfoRanking)
    
    movieCard1.appendChild(imgMovieCard)
    movieCard1.appendChild(movieInfo)

    return movieCard1
}




//TODO Acá deberíamos crear un for de length array

const arrayHTMLlisto = [];

for (let index = 0; index < tempData.length; index++) {

    const tarjetaLista = crearMovieCard(tempData[index])
    arrayHTMLlisto.push(tarjetaLista)

}

if (arrayHTMLlisto.length <= 3) {
    for (let i = 0; i < arrayHTMLlisto.length; i++) {
    
        movieContainer.appendChild(arrayHTMLlisto[i])
        
    }
} else {
    for (let i = 0; i < 3; i++) {
    
        movieContainer.appendChild(arrayHTMLlisto[i])
        
    }
}


// const movieContainer = document.getElementsByClassName('movie-container')[0]
// movieContainer.appendChild(movieCard1)









