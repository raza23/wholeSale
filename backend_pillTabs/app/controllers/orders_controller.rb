class OrdersController < ApplicationController
    before_action :set_order, only: [:update]

    def index   
    @orders = Order.all
    render json: @orders, include: [:user,:drug]
end

# def update
#     # byebug
#     @log.update( clockin: params["log"]["clockin"],clockout: params["log"]["clockout"])
#     render json: @log, status: 200
#   end

  def destroy
    
    # byebug
    @order=Order.find_by(id:params["id"])
    # byebug
    @order.destroy
    render json: @order
  end

def create
    # byebug
    @order = Order.find_or_create_by(user_id: params["user"]["id"], drug_id: params["drug"]['id'], cost: params[:cost],order_type: params[:order_type])
    # byebug
    render json: @order
end

private
def set_order
    @Order = Order.find(params[:id])
  end
end
