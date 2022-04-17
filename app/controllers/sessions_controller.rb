class SessionsController < ApplicationController
	skip_before_action :authorize_user
	skip_before_action :authorize_member

	def login
		user = User.find_by(name: params[:username])
		if user&.authenticate(params[:password])
			session[:user_id] = user.id
			render json: user, status: :ok
		else
			render json: {
					error: 'Invalid Password and/or Username',
			       },
			       status: :unauthorized
		end
	end

	def logout
		session.delete :current_user
	end

	def show
		user = User.find_by(id: session[:user_id])
		render json: user
	end
end
