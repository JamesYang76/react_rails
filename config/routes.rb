Rails.application.routes.draw do
  resources :posts
  devise_for :users
  get 'welcome/index'

  get 'basic_schema', action: :index, controller: 'basic_schema'
  get 'basic_schema/*other', to: 'basic_schema#index'

  get 'main/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'home#index'

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
