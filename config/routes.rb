Rails.application.routes.draw do
  resources :posts
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  root to: 'home#main'
  get 'welcome/index'
  get 'fruits', action: :index, controller: 'fruits'
  get 'fruits/*other', to: 'fruits#index'

  get 'basic_schema', action: :index, controller: 'basic_schema'
  get 'basic_schema/*other', to: 'basic_schema#index'

  get 'koala/login'
  get 'koala/login_callback'
  get 'koala/facebook_profile'
  #get 'main/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  namespace :api do
    namespace :v1 do
      resources :fruits, only: [:index, :create, :destroy, :update]
    end
    namespace :v2 do
      jsonapi_resources :fruits
      jsonapi_resources :contacts
      jsonapi_resources :phone_numbers
    end
  end
end
