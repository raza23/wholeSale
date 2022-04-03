class CategoriesController < ApplicationController
    
        # class UsersController < ApplicationController
            def index
    
                @categories = Category.all
                
                if @categories
                  render json: {
                    users: @categories
                  }
                else
                  render json: {
                    status: 500,
                    errors: ['no categories found']
                  }
                end
            end
            def show
                @category = Category.find(params[:id])
               if @category
                  render json: {
                    user: @category
                  }
                else
                  render json: {
                    status: 500,
                    errors: ['category not found']
                  }
                end
              end
              
              def create
                @category = Category.new(category_params)
                if @category.save
                  login!
                  render json: {
                    status: :created,
                    user: @category
                  }
                else 
                  render json: {
                    status: 500,
                    errors: @category.errors.full_messages
                  }
                end
              end
            private
              
              def user_params
                params.require(:category).permit(:category_type)
              end
            end
    

