Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  mount RailsAdmin::Engine => '/adminpanel', as: 'rails_admin'
  devise_for :users
  root 'static#index'
  get 'static/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
