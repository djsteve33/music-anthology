class Genre {

    static all = []

    constructor({id, name}){
        this.id = id
        this.name = name
        this.element = document.createElement('li')
        this.element.id = `genre-${id}`
        this.genreList = document.getElementById('genre-list')
        this.sorted = false

        Genre.all.push(this)
    }

    attachToDom() {
        this.genreList.append(this.fullDisplay())
        this.addEventListeners()
    }

    addEventListeners() {
        this.element.addEventListener('click', this.displayAlbums)
    }

    fullDisplay() {
        this.element.innerHTML = `
        <h3>${this.name}</h3>`

        return this.element
    }

    get Albums() {
        return this.Albums.all.filter(i => i.genre_id == this.id)
    }

    static find(id) {
        return Genre.all.find(g => g.id == id)
    }

    sortedAlbums() {
        return this.Albums.sort((a,b) => a.title - b.title)
    }

    displayAlbums = (e) => {

        const genreList = document.getElementById('genre-list')
        const albumList = document.getElementById('album-list')

        let gens = genreList.querySelectorAll('li h3')
        gens.forEach(gen => {
            gen.getElementsByClassName.color = "black"
        })
        e.target.style.color = "red"

        albumList.innerHTML = ""
        this.Albums.forEach(i => {
            i.attachToDom
        })

        let seeAllBtn = document.getElementById('all-btn')
        if (!seeAllBtn) {
            seeAllBtn = document.createElement('button')
            seeAllBtn.id = 'all-btn'
            seeAllBtn.innerText = "See All Albums"
            this.genreList.append(seeAllBtn)
        } else{
            seeAllBtn = document.getElementById('all-btn')
        }
        seeAllBtn.addEventListener('click', this.reset)
    }

    reset = () => {
        let genEl = document.getElementById(`genre-${this.id}`)
        genEl.children[0].style.color = "black"
        Album.resetAllAlbums()
    }
}