
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


require 'faker'


b1 = Board.create(name: 'board1')
b2 = Board.create(name: 'board2')
b3 = Board.create(name: 'board3')
b4 = Board.create(name: 'board4')

u1 = User.create(username: 'Bob', password: '123', password_confirmation: '123')
u2 =
	User.create(username: 'Martha', password: '123', password_confirmation: '123')
u3 =
	User.create(username: 'Agatha', password: '123', password_confirmation: '123')
u4 =
	User.create(username: 'Prince', password: '123', password_confirmation: '123')
u5 =
	User.create(username: 'Jacob', password: '123', password_confirmation: '123')
u6 =
	User.create(username: 'Ingrid', password: '123', password_confirmation: '123')
u7 =
	User.create(
		username: 'Abraham',
		password: '123',
		password_confirmation: '123',
	)

m1 = Member.create(board: b1, user: u1, is_admin: true)
m2 = Member.create(board: b2, user: u1, is_admin: false)
m3 = Member.create(board: b3, user: u1, is_admin: false)
m4 = Member.create(board: b1, user: u2, is_admin: false)
m5 = Member.create(board: b1, user: u3, is_admin: false)
m6 = Member.create(board: b2, user: u4, is_admin: false)
m7 = Member.create(board: b4, user: u4, is_admin: false)
m8 = Member.create(board: b4, user: u5, is_admin: false)
m9 = Member.create(board: b2, user: u5, is_admin: false)
m10 = Member.create(board: b2, user: u6, is_admin: false)
m11 = Member.create(board: b3, user: u6, is_admin: false)
m12 = Member.create(board: b3, user: u7, is_admin: false)

Board.all.each do |b|
	List.new(board: b, name: 'To Do')
	List.new(board: b, name: 'In Progress')
	List.new(board: b, name: 'Testing')
	List.new(board: b, name: 'Completed')
end

# 20.times do
# 	Task.new(
# 		list: List.all.sample,
# 		user: User.all.sample,
# 		member: Member.all.sample,
# 		title: 'new task!',
# 		content: 'content...',
# 		priority: rand(1..5),
# 		start_date: (1..500).to_a.rand.days.ago,
# 		due_date: (1..500).to_a.rand.days.ago,
# 	)
# end
