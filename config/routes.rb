Rails.application.routes.draw do
  get '*path', to: "static_pages#index", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

  get '/get_current_user', to: 'sessions#get_current_user'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/stocks/lookup', to: 'stocks#lookup'

  resources :users, only: [:create]
end
