class CreateLists < ActiveRecord::Migration[7.0]
  def change
    create_table :lists do |t|
      t.belongs_to :board, null: false, foreign_key: true
      t.string :name
      t.text :rank

      t.timestamps
    end
    add_index :lists, :rank, unique: true
  end
end
