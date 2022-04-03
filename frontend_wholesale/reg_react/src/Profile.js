import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import OrderItem from "./OrderItem";
import DoctorProfile from "./DoctorProfile";
import * as ReactBootstrap from "react-bootstrap";

import Survey from "./Survey";

class Profile extends Component {
  render() {
    // console.log(this.props.orders);
    console.log(this.props.user.category_id);
    // console.log(this.props.drugs);
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

    // const doc_nurse = this.props.user.category_id === 3 || this.props.user.category_id === 2

    console.log(myOrders);

    if (this.props.user.category_id === 3) {
      return <DoctorProfile />;
    } else {
      return (
        <div>
          <h1>{this.props.user.first_name} Home Page</h1>
          <ul className="header">
            <p>My Orders</p>
            <ul>{indOrders}</ul>
            <Link to="/survey">My survey</Link>
            <p></p>
            <Link to="/alldrugs">Make Order</Link>
          </ul>
          <div></div>
        </div>
      );
    }
  }
}

export default withRouter(Profile);
