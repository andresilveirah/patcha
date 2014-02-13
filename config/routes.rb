Patcha::Application.routes.draw do
  resources :patches

  devise_for :users
  resources :users

  root "users#index"
end
