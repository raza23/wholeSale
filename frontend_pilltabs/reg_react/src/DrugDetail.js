import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import * as ReactBootstrap from "react-bootstrap";

const Orders_URL = "http://localhost:3001/orders";

class DrugDetail extends Component {
  state = {
    orders: this.props.orders,
    order_type_cost: "Select Order Type"

    // cost: parseInt(this.state.order_type_cost)
  };

  makeOrder = () => {
    console.log("click");
    const newOrder = {
      user: this.props.user,
      drug: this.props.drug,
      order_type: this.state.order_type_cost,
      cost: parseInt(this.state.order_type_cost.replace(/[^0-9]/g, ""))
      // *this data is what gooes to DB, need to get the data from frontend to populate
    };
    fetch(Orders_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.jwt}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(newOrder)
    })
      .then(res => res.json())
      .then(newOrder => {
        this.setState({ orders: [...this.state.orders, newOrder] });
      });
    debugger;
    // this.props.history.push('/Home')
    // window.location.reload();

    // debugger
  };

  handleOrder = e => {
    this.setState({ order_type_cost: e.currentTarget.innerText });
    // debugger;
  };

  render() {
    const orderSelection = this.state.order_type_cost;
    console.log(this.props);
    console.log(this.state);
    if (!this.props.drug) {
      return (
        <ReactBootstrap.Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </ReactBootstrap.Spinner>
      );
    }

    return (
      <div>
        <p>{this.props.drug.name}</p>
        <ReactBootstrap.Dropdown>
          <ReactBootstrap.Dropdown.Toggle variant="success" id="dropdown-basic">
            {orderSelection}
          </ReactBootstrap.Dropdown.Toggle>

          <ReactBootstrap.Dropdown.Menu>
            <ReactBootstrap.Dropdown.Item
              onClick={this.handleOrder}
              href="#/action-1"
            >
              One Time for $6
            </ReactBootstrap.Dropdown.Item>
            <ReactBootstrap.Dropdown.Item
              onClick={this.handleOrder}
              href="#/action-2"
            >
              Subscription for $10
            </ReactBootstrap.Dropdown.Item>
          </ReactBootstrap.Dropdown.Menu>
        </ReactBootstrap.Dropdown>
        {this.state.order_type_cost === "Select Order Type" ? null : (
          <ReactBootstrap.Button onClick={this.makeOrder} variant="primary">
            Confirm Order
          </ReactBootstrap.Button>
        )}
      </div>
    );
  }
}

export default withRouter(DrugDetail);
