Rails.application.routes.draw do
  post '/login', to: "authentication#authenticate"

  post '/signup', to: "users#create"
  get '/users/:id', to: "users#show"

  get '/articles', to: "articles#index"
  get '/users/:id/likes', to: "users#likes"

  post 'like', to: "likes#like"
  delete 'unlike', to: 'likes#un_like'

  get '/toparticles', to: "articles#top_articles"


  post '/articles', to: "articles#create"

  post '/articles/:id/saves' => 'articles#saves', as: :saves




end
