class User < ApplicationRecord
	has_secure_password

	has_many :members
	has_many :boards, through: :members
	has_many :tasks

	validates :username, :password, :password_confirmation, presence: true
end
