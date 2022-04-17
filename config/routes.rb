Rails.application.routes.draw do
	resources :comments, except: %i[index update]
	resources :tasks
	resources :lists
	resources :members
	resources :boards
	resources :users, except: %i[create show]

	# Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
	# Defines the root path route ("/")
	# root "articles#index"

	post '/signup', to: 'sessions#create'
	post '/login', to: 'sessions#login'
	post '/login', to: 'sessions#logout'
end
