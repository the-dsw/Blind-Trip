class CreateGroupes < ActiveRecord::Migration
  def change
    create_table :groupes do |t|

      t.string :name
      t.integer :budget
      t.integer :countday
      t.integer :tripduration
      t.string :email,              null: false, default: ""

      t.timestamps null: false
    end
  end
end
