import React, { Component } from "react";
import * as RB from "react-bootstrap";

export default class DoctorOrderItem extends Component {
  state = {
    edit: false
  };

  handleOrdersConfirmation = e => {
    const order = {
      order: e.currentTarget.innerText
      //   answer2: editAnswer2,

      //   user: userId
    };
    // debugger;
    fetch(`http://localhost:3001/orders/${this.props.id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.jwt}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },

      body: JSON.stringify(order)
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => {
        console.log(err);
      });
    console.log(JSON.stringify(order));
    // debugger;
  };

  //   handleOrders = e => {
  //     console.log("hey");
  //     this.setState(state => ({
  //       edit: !state.edit
  //       //*   e.currentTarget.innerText
  //     }));
  //     debugger;
  //   };

  render() {
    console.log(this.props);

    return (
      <div>
        {this.props.drug.name}
        <p>Purchased by: {this.props.user.first_name} </p>
        <RB.DropdownButton
          id="dropdown-basic-button"
          title={this.props.confirmed}
        >
          <RB.Dropdown.Item
            onClick={this.handleOrdersConfirmation}
            href="#/action-1"
          >
            Yes
          </RB.Dropdown.Item>
          <RB.Dropdown.Item
            onClick={this.handleOrdersConfirmation}
            href="#/action-2"
          >
            Deny
          </RB.Dropdown.Item>
          <RB.Dropdown.Item
            onClick={this.handleOrdersConfirmation}
            href="#/action-3"
          >
            Pending
          </RB.Dropdown.Item>
        </RB.DropdownButton>
      </div>
    );
  }
}
