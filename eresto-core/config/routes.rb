Rails.application.routes.draw do
  namespace :api do
    namespace :v1, defaults: { format: :json } do
      get '/sessions/create' => "sessions#create"

      resources :users
    end
  end
  match "*path", to: "errors#catch_404", via: :all
end
