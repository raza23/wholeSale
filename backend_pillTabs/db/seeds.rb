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


user1 = User.create(first_name:'Bob', last_name: 'Smith',category: patient,username: 'bob_test',email: 'bobbytest@gmail.com', password: 'bob_bob_bob')
# !

drug1 = Drug.create(name: 'Advil')


order1 = Order.create(order_type: 'One-Time',user: user1,drug: drug1,cost: 5)
