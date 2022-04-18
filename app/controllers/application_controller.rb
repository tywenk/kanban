class ApplicationController < ActionController::API
	include ActionController::Cookies
	rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
	rescue_from ActiveRecord::RecordInvalid,
	            with: :render_unprocessable_entity_response

	before_action :authorize_user

	#before_action :authorize_member

	private

	def current_user
		@current_user = User.find_by(id: session[:user_id])
	end

	def current_member
		@current_member = Member.find_by(id: session[:member_id])
	end

	def authorize_user
		unless current_user
			render json: { error: 'Not authorized user' }, status: :unauthorized
		end
	end

	def authorize_member
		unless current_member
			render json: { error: 'Not authorized member' }, status: :unauthorized
		end
	end

	def authorize_admin
		unless @current_member.admin
			render json: { error: 'Not admin user' }, status: :unauthorized
		end
	end

	def render_not_found_response(e)
		render json: { error: ["#{e.model} not found."] }, status: :not_found
	end

	def render_unprocessable_entity_response(e)
		render json: {
				errors: e.record.errors.full_messages,
		       },
		       status: :unprocessable_entity
	end
end
