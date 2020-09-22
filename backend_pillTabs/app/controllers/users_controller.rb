class UsersController < ApplicationController
    # class UsersController < ApplicationController
        def index

            @users = User.all
            
            if @users
              render json: {
                users: @users,include: [:category]
              }
            else
              render json: {
                status: 500,
                errors: ['no users found']
              }
            end
        end
        def show
            @user = User.find(params[:id])
           if @user.valid?
              render json: {
                user: UserSerializer.new(@user)
              },status: :created
            else
              render json: {
                status: 500,
                errors: ['user not found']
              }
            end
          end


          def update
            debugger
          end
          
          def create
            # debugger
            @user = User.create(user_params)
            # debugger
            if @user.valid?
              # login!
              render json: {
                status: :created,
                user: @user
              }
            else 
              render json: {
                status: 500,
                errors: @user.errors.full_messages
              }
            end
          end

        private
          
          def user_params
            params.require(:user).permit(:first_name, :last_name, :category_id, :username,:email,:password)
          end
        end
