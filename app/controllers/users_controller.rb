class UsersController < ApplicationController
	# POST /signup
	def create
		user = User.create!(user_params)
		session[:user_id] = user.id
		render json: user, status: :created
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
