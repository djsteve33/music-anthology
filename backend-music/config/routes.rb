Rails.application.routes.draw do
  resources :albums
  resources :genres, only: [:show, :index]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
