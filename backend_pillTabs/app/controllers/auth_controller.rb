class AuthController < ApplicationController
    
        #! GOOD ONE 
           
       
           def UserCreate
               @user = User.find_by(email: user_login_params[:email])
            #    byebug
               if @user && @user.authenticate(user_login_params[:password])
                   token = encode({user_id: @user.id})
                   
                   render json: { user: @user,message: 'success', token: token }, status: :accepted
                # *   all this information is sent to the React app
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
               params.require(:user).permit(:email, :password)
           end
       
           
       
       
end
