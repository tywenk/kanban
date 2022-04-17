class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.belongs_to :list, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :member, null: false, foreign_key: true
      t.string :title
      t.text :content
      t.integer :priority
      t.datetime :start_date
      t.datetime :due_date
      t.text :rank

      t.timestamps
    end
  end
end
