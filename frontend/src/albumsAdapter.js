// communicate with my backend
// post, patch, delete
class AlbumsAdapter{
    constructor() {
        this.baseURL = 'http://localhost:3000/albums'
    }

    fetchAlbums() {
        fetch(this.baseURL)
        .then(res => res.json())
        .then(response => {
            response.data.forEach(el => {
                let album = new AlbumsAdapter(el.attributes)
                album.attachToDom(el)
                
            })
        })
    }

    get albumList() {
        return document.getElementById('album-list')
    }
    
    attachToDom(){
        this.albumList.append(this.fullDisplay())
        this.addEventListeners()
    }

    fullDisplay() {
        this.element.innerHTML = `
        <li>
        $<span class="title">${this.title}</span>
        <strong class="artist_name">${this.artist_name}</strong>
        <span class="media_type">${this.media_type}</span>
        </li>
        <button class="delete" data-id="${this.id}">Delete</button>
        <button class="update" data-id="${this.id}">Update</button>`

        return this.element
    }

    sendPatchRequest(albumId){
        const title = document.getElementById(`update-title-${albumId}`).value 
        const artist_name = document.getElementById(`update-artist_name-${albumId}`).value 
        const media_type = document.getElementById(`update-media_type-${albumId}`).value 

        let albumObj = {
            title,
            artist_name,
            media_type
        }

        let configObj = {
            method: 'PATCH',
            headers: {
                "Conetent-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(albumObj)
        }

        fetch(this.baseURL + `/${albumId}`, configObj)
        .then(Res => res.json())
        .then(response => {
            let album = Album.all.find(i => i.id == response.data.attributes.id)
            album.updateAlbumOnDom(response.data.attributes)
        })

        let form = document.getElementById(`update-form-${albumId}`)
        form.remove()
    }

    deleteAlbum(id) {
        //remove from db
        let configObj = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }

        fetch(this.baseURL + `/${id}`, configObj)
        .then(res => res.json())
        .then(json => {
            alert(json.message)
        })
        //remeove from front end array
        Album.all = Album.all.filter(i => i.id != id)

        //.remove from dom
        let album = document.getElementById(`album-${id}`)
        album.remove()
    }

    handleFormSubmit = (e) => {
        e.preventdefault()
        const title = document.getElementById('album-title').value
        const artist_name = document.getElementById('album-artist_name').value
        const media_type = document.getElementById('album-media_type').value
        const genre_id = document.getElementById('genre').value

        let newAlbumObj = {
            title,
            artist_name,
            media_type,
            genre_id
        }

        let configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(newAlbumObj)
        }

        fetch(this.baseURL, configObj)
        .then(res => res.json())
        .then(json => {
            let album = new Album(json.data.attributes)
            album.attachToDom()
        })

        albumForm.reset()
        const newFormButton = document.getElementById('new-form-btn')
        const formContainer =document.getElementById('new-form-container')
        formContainer.hidden = true
        newFormButton.hidden = false
        newFormButton.addEventListener('click', hideBtnLoadForm)
    }
}