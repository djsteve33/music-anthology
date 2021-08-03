class GenresAdapter {
    constructor() {
        this.baseURL = 'http://localhost:3000/genres'
    }

    fetchGenres() {
        fetch(this.baseURL)
        .then(res => res.json())
        .then(response => {
            //console.log(response)
            response.data.forEach(el => {
                this.initializeGenre(el)
            })
        })
    }

    initializeGenre(data) {
        let gen = new GenresAdapter({id: data.id, ...data.attributes})
        gen.attachToDom()
    }

    attachToDom() {
        this.genreList.append(this.fullDisplay())
        this.addEventListeners()
    }
}