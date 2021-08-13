class Album{
    static all = []

    constructor({title, artist_name, media_type, id, genre_id}) {
        this.title = title
        this.artist_name = artist_name
        this.media_type = media_type
        this.id = id
        this.genre_id = genre_id
        this.element = document.createElement('div')
        this.element.id = `album-${this.id}`

        Album.all.push(this)
    }

    get albumList() {
        return document.getElementById('album-list')
    }

    static findById(id){
        return Album.all.find(album => album.id == id)
    }

    addEventListeners() {
        this.element.addEventListener('click', this.handleListClick)
    }

    attachToDom(){
        this.albumList.append(this.fullDisplay())
        this.addEventListeners()
    }

    fullDisplay() {
        this.element.innerHTML = `
        <li>
        <span class="title">${this.title}</span>
        <strong class="artist_name">${this.artist_name}</strong>
        <span class="media_type">${this.media_type}</span>
        </li>
        <button class="delete" data-id="${this.id}">Delete</button>
        <button class="update" data-id="${this.id}">Update</button>
        `
        return this.element
    }

    updateAlbumOnDom({title, artist_name, media_type}){
        this.title = title
        this.artist_name = artist_name
        this.media_type = media_type
        this.fullDisplay()
        this.addEventListeners()
    }

    static resetAllAlbums() {
        Album.all.forEach(el => el.attachToDom())
        document.getElementById('all-btn').remove()
    }

    addUpdateAlbumFields(albumId){
        let album = document.querySelector(`#album-${albumId} li`)
        let updateForm = `
        <input type="text" value="${this.title}" name="title" id="update-title-${albumId}">
        <input type="text" name="artist_name" value="${this.artist_name}" id="update-artist_name-${albumId}">
        <input type="text" name="media_type" value="${this.media_type}" id="update-media_type-${albumId}">`

        let formDiv = document.createElement('div')
        formDiv.id = `update-form-${albumId}`
        formDiv.innerHTML = updateForm
        album.append(formDiv)
    }

    handleListClick = (e) => {
        let id = e.target.dataset.id
        if (e.target.className === "delete"){
            albumsAdapter.deleteAlbum(id)
        } else if(e.target.className === "update"){
            e.target.className = "save"
            e.target.innerText = "Save"
            this.addUpdateAlbumFields(id)
        }else if(e.target.className === 'save'){
            e.target.className = "update"
            e,target.innerText = "Update"
            albumsAdapter.sendPatchRequest(id)
        }
    }
}