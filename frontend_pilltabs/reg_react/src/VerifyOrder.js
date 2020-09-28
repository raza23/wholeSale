import React, { Component } from "react";
import * as ReactBootstrap from "react-bootstrap";
import DoctorOrderItem from "./DoctorOrderItem";

export default class VerifyOrder extends Component {
  render() {
    console.log(this.props);
    const allOrders = this.props.orders.map(oneOrder => {
      return (
        <li>
          <DoctorOrderItem
            orders={this.props.orders}
            user={this.props.user}
            key={oneOrder.id}
            {...oneOrder}
          />
        </li>
      );
    });
    if (!this.props.doctor) {
      return (
        <ReactBootstrap.Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </ReactBootstrap.Spinner>
      );
    }

    return <div>{allOrders} </div>;
  }
}
