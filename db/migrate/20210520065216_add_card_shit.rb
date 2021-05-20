class AddCardShit < ActiveRecord::Migration[6.1]
  def change
    create_table :cards do |t|
      t.string :description
      t.integer :votes
      t.timestamps
    end

    create_table :comments do |t|
      t.references :card
      t.string :detail
      t.timestamps
    end
  end
end
