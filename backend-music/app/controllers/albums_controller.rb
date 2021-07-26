class AlbumsController < ApplicationController

    def index
        albums = Album.all
        render json: AlbumSerializer.new(albums, {include: [:genre]})
    end

    def show
        album = Album.find(params[:id])
        render json: album
    end
end
