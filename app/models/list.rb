require 'lexorank/rankable'

class List < ApplicationRecord
	belongs_to :board
	has_many :tasks

	rank!
end
