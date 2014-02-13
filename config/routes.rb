Patcha::Application.routes.draw do
  resources :patches

  devise_for :users
  resources :users

  root "patches#index"
end
