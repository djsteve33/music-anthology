# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
rock = Genre.create(name: "rock")
country = Genre.create(name: "country")
jazz = Genre.create(name: "jazz")

Album.create([
    {title: 'Pyromania', artist_name: 'Def Leppard', media_type: 'CD', genre: rock},
    {title: 'Synchronicity', artist_name: 'The Police', media_type: 'cassette', genre: rock},
    {title: 'No Fences', artist_name: 'Garth Brooks', media_type: 'vinyl', genre: country},
    {title: 'Popsicle Toes', artist_name: 'Diana Krall', media_type: 'CD', genre: jazz}
])