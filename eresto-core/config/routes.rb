Rails.application.routes.draw do
  namespace :api do
    namespace :v1, defaults: { format: :json } do
      post '/sessions' => "sessions#create"

      resources :users
    end
  end
  match "*path", to: "errors#catch_404", via: :all
  root "errors#catch_404"
end
