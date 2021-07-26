class AlbumSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :artist_name, :media_type
  belongs_to :genre
end