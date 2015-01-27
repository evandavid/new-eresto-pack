object false
node(:status_code) { @code }
node(:message) { @message }
child @data, :root => :results, :object_root => false do
  object :user
  attributes :id, :username, :authentication_token, :role
  node(:created_at) { |user| user.created_at.to_i * 1000 }
  node(:updated_at) { |user| user.updated_at.to_i * 1000 }

  child(:profile) do
    attributes :id, :name, :address, :phone, :join_at, :contract_until
    node(:created_at) { |profile| profile.created_at.to_i * 1000 }
    node(:updated_at) { |profile| profile.updated_at.to_i * 1000 }
  end
end
