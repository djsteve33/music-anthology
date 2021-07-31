class AlbumsController < ApplicationController

    def index
        albums = Album.all
        render json: AlbumSerializer.new(albums)
    end

    def show
        album = Album.find(params[:id])
        render json: AlbumSerializer.new(album)
    end

    def create
        album = Album.new(album_params)
        if album.save
            render json: AlbumSerializer.new(album)
        else
            render json: {error: 'could not be created'}
        end
    end

    def destroy
        album = Album.find(params[:id])
        album.destroy
        render json: {message: "Successfully deleted #{album.name}!"}
    end

    def update
        album = Album.find(params[:id])
        album.update(album_params)
        render json: AlbumSerializer.new(album)
    end

    private

    def album_params
        params.require(:album).permit(:title, :artist_name, :media_type, :genre_id)
    end

end
