class BoardsController < ApplicationController
	#skip_before_action :authorize_user, except: [:index]

	# skip_before_action :authorize_member

	def index
		render json: Board.all, status: :ok
	end

	def show
		render json: find_board, include: ['lists', 'lists.tasks']
	end

	def create
		board = Board.create!(board_params)
		render json: board, status: :created
	end

	def update
		board = find_board
		board.update(board_params)
		render json: board
	end

	def destroy
		board = find_board
		board.destroy
		head :no_content
	end

	private

	def find_board
		board = Board.find(params[:id])
	end

	def board_params
		params.permit(:name)
	end
end
