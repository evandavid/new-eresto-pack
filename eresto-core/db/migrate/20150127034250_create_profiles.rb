class CreateProfiles < ActiveRecord::Migration
  def change
    create_table :profiles do |t|
      t.integer :user_id
      t.string :name
      t.text :address
      t.string :phone
      t.date :join_at
      t.date :contract_until

      t.timestamps
    end
    add_index :profiles, :user_id
  end
end
