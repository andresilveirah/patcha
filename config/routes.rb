Patcha::Application.routes.draw do
  resources :frames

  resources :settings, only: [:show, :edit, :update]

  get "groups" => "groups#index"
  resources :patches

  devise_for :users
  resources :users

  root "patches#index"
end
