class GenresAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/genres'
    }

    fetchGenres() {
        fetch(this.baseUrl)
        .then(res => res.json())
        .then(response => {
            //console.log(response)
            response.data.forEach(gen => {
                this.initializeGenre(gen)
            })
        })
    }

    initializeGenre(data) {
        let gen = new Genre({id: data.id, ...data.attributes})
        gen.attachToDom()
    }

    // attachToDom() {
    //     this.genreList.append(this.fullDisplay())
    //     this.addEventListeners()
    // }
}