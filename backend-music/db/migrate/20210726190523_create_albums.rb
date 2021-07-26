class CreateAlbums < ActiveRecord::Migration[6.1]
  def change
    create_table :albums do |t|
      t.string :title
      t.string :artist_name
      t.string :media_type
      t.belongs_to :genre, null: false, foreign_key: true

      t.timestamps
    end
  end
end
