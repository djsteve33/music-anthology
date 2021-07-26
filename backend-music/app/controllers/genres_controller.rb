class GenresController < ApplicationController
    
    def index
        genres = Genre.all
        render json: GenreSerializer.new(genres, {include: [:albums]})
    end

    def show
        genre = Genre.find(params[:id])
        render json: GenreSerializer.new(genre, {include: [:albums]})
    end
end
