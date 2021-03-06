Rails.application.routes.draw do

  post '/login', to: 'auth#UserCreate'
  get '/profile', to: 'auth#UserProfile'

  delete '/logout', to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'
  
  resources :categories
  resources :orders
  resources :drugs
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
