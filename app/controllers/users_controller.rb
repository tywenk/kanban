class UsersController < ApplicationController
	#skip_before_action :authorize_user, only: %i[create index]

	# skip_before_action :authorize_member

	# POST /signup
	def create
		user = User.create!(user_params)
		session[:user_id] = user.id
		render json: user, status: :created
	end

	#Get /users
	def index
		render json: User.all
	end

	# GET /authorize_user
	def show
		render json: @current_user
	end

	private

	def user_params
		params.permit(:username, :password, :password_confirmation)
	end
end
