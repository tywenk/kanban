class SessionsController < ApplicationController
	#skip_before_action :authorize_user

	# skip_before_action :authorize_member

	#POST /login
	def create
		user = User.find_by(username: params[:username])
		if user&.authenticate(params[:password])
			session[:user_id] = user.id
			render json: user, status: :ok
		else
			render json: {
					error: 'Invalid Password and/or Username',
			       },
			       status: :unauthorized
		end

		# debugger
	end

	#POST /logout
	def destroy
		session.delete :current_user
	end

	#GET /sessions/:user_id
	def show
		user = User.find_by(id: session[:user_id])
		render json: user
	end
end
