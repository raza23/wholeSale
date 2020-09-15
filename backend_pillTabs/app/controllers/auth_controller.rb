class AuthController < ApplicationController
    
        #! GOOD ONE 
           
       
           def UserCreate
               @user = User.find_by(username: user_login_params[:username])
               byebug
               if @user && @user.authenticate(user_login_params[:password])
                   token = encode({user_id: @user.id})
                   
                   render json: { user: @user,message: 'success', token: token }, status: :accepted
               else
                   render json: {message: 'wrong'}, status: :unauthorized 
               end
           end
       
           
           def UserProfile
               token = request.headers['Authorization'].split(' ')[1]
               payload = decode(token)
               # # user_id = token[0]['user_id']
               user = User.find(payload["user_id"])
               render json: {user_data: user}
               
               
           end
       
        
           
           
               private
           def user_login_params
               params.require(:user).permit(:username, :password)
           end
       
           
       
       
end
