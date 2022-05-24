const form = document.getElementById("film-form")
const titleElement = document.querySelector("#title")
const directorElement = document.querySelector("#director")
const urlElement = document.querySelector("#url")

// UI Objesi
const ui = new UI()

// Storage Objesi Üretme
const storage = new Storage()
// Tüm eventleri yükleme

eventListeners()

function eventListeners() {
    form.addEventListener("submit",addFilm)
    document.addEventListener("DOMContentLoaded",function () {
        let films = storage.getFilmFromStorage()
        ui.loadAllFilms(films)
    })
}
function addFilm(e) {
    const title = titleElement.value
    const director = directorElement.value
    const url = urlElement.value

    if(title === "" || director === "" || url === ""){
        // Hata
        ui.displayMessages("Tüm alanları doldurun...","danger")
    }
    else{
        // Yeni Film
        const newFilm = new Film(title,director,url)
        storage.addFilmToStorage(newFilm) // Storage'a Film ekleme
        ui.addFilmToUI(newFilm) // Arayüze film ekleme
        ui.displayMessages("Film başarıyla eklendi...","success")
    }

    ui.clearInputs(titleElement,urlElement,directorElement)

    e.preventDefault()
}
