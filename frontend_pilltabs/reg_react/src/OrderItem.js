import React from "react";

class OrderItem extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>
          {this.props.drug.name}-{this.props.order_type}
        </h1>
      </div>
    );
  }
}

export default OrderItem;
