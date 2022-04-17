Rails.application.routes.draw do
	resources :comments, except: %i[index update]
	resources :tasks
	resources :lists
	resources :members
	resources :boards
	resources :users, except: %i[create]

	# Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
	# Defines the root path route ("/")
	# root "articles#index"

	post '/signup', to: 'users#create'
	post '/login', to: 'sessions#login'
	delete '/logout', to: 'sessions#logout'
	get '/sessions/:user_id', to: 'sessions#show'
end
