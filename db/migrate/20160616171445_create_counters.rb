class CreateCounters < ActiveRecord::Migration
  def change
    create_table :counters do |t|

      t.integer :countinternational
      t.integer :countnational
      t.integer :countmountain
      t.integer :countbeach
      t.integer :countoutback
      t.integer :counthot
      t.integer :countcold
      t.timestamps null: false
    end
  end
end
