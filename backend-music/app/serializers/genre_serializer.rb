class GenreSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name
  has_many :albums
end
