class AddDetailToUser < ActiveRecord::Migration
  def change
    add_column  :users, :authentication_token,  :string
    add_column  :users, :role,                  :string
    add_column  :users, :username,              :string

    add_index   :users, :authentication_token,  unique: true
    add_index   :users, :username,              unique: true
    add_index   :users, :role
  end
end
