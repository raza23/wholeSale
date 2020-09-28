import React from "react";
import { withRouter, Link } from "react-router-dom";

class DoctorProfile extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Doctor</h1>
        <Link to="/verifyOrders">Verify Orders</Link>
      </div>
    );
  }
}

export default withRouter(DoctorProfile);
