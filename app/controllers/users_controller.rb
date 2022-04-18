class UsersController < ApplicationController
	# skip_before_action :authorize_user
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

	# GET /users/:id
	def show
		user = User.find_by(id: params[:user_id])
		render json: user
	end

	private

	def user_params
		params.permit(:username, :password, :password_confirmation)
	end
end
