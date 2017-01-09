class CreatePlants < ActiveRecord::Migration[5.0]
  def change
    create_table :plants do |t|
      t.string :name_common
      t.string :name_latin
      t.string :location
      t.integer :water_interval

      t.timestamps
    end
  end
end
