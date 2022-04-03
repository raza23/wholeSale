import React, { Component } from "react";
import DrugListItem from "./DrugListItem";

export default class Orders extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Make an order</h1>
        <div className="ui container">
          <div className="ui celled selection list">
            {/* <h1>{this.props.u}</h1>  */}
            {this.props.drugs.map(drug => (
              <DrugListItem
                user={this.props.user}
                // orgs={this.props.orgs}
                key={drug.id}
                drug={drug}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
