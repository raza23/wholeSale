class UsersController < ApplicationController
  # before_action :set_user, only: [:update]

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
            @user = User.find_by(id: params['id'])
            debugger
            @user.update(answer1: params["answer1"], answer2: params["answer2"])
            # ,answer3: params["user"]["answer3"],answer4: params["user"]["answer4"],answer5: params["user"]["answer5"],answer6: params["user"]["answer6"],answer7: params["user"]["answer7"],answer8: params["user"]["answer8"] )
            # debugger
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

        def answer_params
          params.fetch(:user,{}).permit(:id,:answer1,:answer2)
          # ,:answer3,:answer4,:answer5,:answer6,:answer7,:answer8)
        end
          
          
          def user_params
            params.require(:user).permit(:first_name, :last_name, :category_id, :username,:email,:password,:answer1,:answer2,:answer3,:answer4,:answer5,:answer6,:answer7,:answer8)
          end

          # def set_user
          #   @user = User.find(params['id'])
          # end

        end
