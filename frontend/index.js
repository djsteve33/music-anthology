const albumForm = document.getElementById('album-form')
const albumsAdapter = new AlbumsAdapter
const genresAdapter = new genresAdapter
const newFormButton = document.getElementById('new-form-btn')

function hideBtnLoadForm(e) {
    e.target.hidden = true
    const newForm = document.getElementById('new-form-container')
    newForm.hidden = false
}

document.addEventListener('DOMContentLoaded', () => {
    albumsAdapter.fetchAlbums()
    genresAdapter.fetchGenres()
    albumForm.addEventListener('submit', albumsAdapter.handleFormSubmit)
    newFormButton.addEventListener('click', hideBtnLoadForm)
    debugger
})