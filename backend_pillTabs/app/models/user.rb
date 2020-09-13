class User < ApplicationRecord
    has_secure_password

    validates :username, presence: true
    validates :username, uniqueness: true
    validates :username, length: { minimum: 4 }
    # validates :email, presence: true
    # validates :email, uniqueness: true
    # validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i

    has_many :orders
    has_many :drugs,through: :orders 
    belongs_to :category

    def name 
        self.first_name + ' ' + self.last_name
    end

end
