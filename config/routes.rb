Patcha::Application.routes.draw do
  get "groups" => "groups#index"
  resources :patches

  devise_for :users
  resources :users

  root "patches#index"
end
