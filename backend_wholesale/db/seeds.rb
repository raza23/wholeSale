# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
patient = Category.create(category_type: 'Patient')
nurse = Category.create(category_type: 'Nurse')
doctor = Category.create(category_type: 'Doctor')


user1 = User.create(first_name:'Bob', last_name: 'Smith',category: patient,username: 'bob_test',email: 'bobbytest@gmail.com', password: 'bob_bob_bob',answer1: 2,answer2: 5, answer3:4,answer4: 7,answer5: 3)
doctor1 = User.create(first_name:'Mario',last_name:'Luigi',category: doctor,username: 'drMario',email: 'mario@gmail.com',password: 'bowserSucks',answer1: 3,answer2: 9, answer3:3,answer4: 4,answer5: 1)
# !

drug1 = Drug.create(name: 'Advil')
drug2 = Drug.create(name: 'Tylenol')



order1 = Order.create(order_type: 'One-Time',user: user1,drug: drug1,cost: 5,confirmed: "Yes")
order2 = Order.create(order_type: 'Subscription',user: user1,drug: drug2,cost: 10)
