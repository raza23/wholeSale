import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class DrugItem extends Component {
  render() {
    console.log(this.props);
    // let organization = this.props.orgs.filter(organization => organization.id === this.props.opp.organization_id)
    // let organization_name = organization.map(org => org.name)
    // console.log(organization_name)
    return (
      <Link className="item" to={`/alldrugs/${this.props.drug.id}`}>
        <div className="content">
          <h2>{this.props.drug.name}</h2>
          <em>
            {/* {organization_name}
            {this.props.opp.organization.name} -{" "}
            {this.props.opp.organization.description} */}
          </em>
        </div>
      </Link>
    );
  }
}
