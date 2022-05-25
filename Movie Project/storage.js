function Storage() {
    
}
Storage.prototype.addFilmToStorage = function (newFilm) {
    let films = this.getFilmFromStorage()

    films.push(newFilm)

    localStorage.setItem("films",JSON.stringify(films))
}
Storage.prototype.getFilmFromStorage = function () {
    let films;

    if(localStorage.getItem("films") === null){
        films = []
    }
    else{
        films = JSON.parse(localStorage.getItem("films"))

    }
    return films
}
Storage.prototype.deleteFilmFromStorage = function (filmTitle) {
    let films = this.getFilmFromStorage()

    films.forEach(function(film,index){
        if(film.title === filmTitle){
            films.splice(index,1)
        }
    })
    localStorage.setItem("films",JSON.stringify(films))
}
Storage.prototype.clearAllFilmsFromStorage = function () {
    localStorage.removeItem("films")
}
