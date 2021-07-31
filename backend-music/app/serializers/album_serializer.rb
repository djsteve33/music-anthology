class AlbumSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :artist_name, :media_type, :id, :genre_id
  #belongs_to :genre
end
