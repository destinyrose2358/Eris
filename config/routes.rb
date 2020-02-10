Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:index, :show, :create, :destroy] do
      resources :channels, only: [:create, :destroy]
      resources :memberships, only: [:create]
    end
    resources :channels do
      resources :messages, only: [:index, :create]
      resources :memberships, only: [:create]
    end
    resources :messages, only: [:update, :destroy]
    resources :memberships, only: [:update, :destroy]
  end
end
