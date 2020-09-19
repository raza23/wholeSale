import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import OrderItem from "./OrderItem";

class Profile extends Component {
  render() {
    console.log(this.props.orders);
    console.log(this.props.user);
    console.log(this.props.drugs);
    const myOrders = this.props.orders.filter(
      order => order.user.id === this.props.user.id
    );

    const indOrders = myOrders.map(oneOrder => {
      return (
        <OrderItem
          orders={this.props.orders}
          user={this.props.user}
          key={oneOrder.id}
          {...oneOrder}
        />
      );
    });

    console.log(myOrders);
    return (
      <div>
        <h1>{this.props.user.first_name} Home Page</h1>
        <ul className="header">
          <p>My Orders</p>
          <ul>{indOrders}</ul>
        </ul>
        <div></div>
      </div>
    );
  }
}

export default withRouter(Profile);
