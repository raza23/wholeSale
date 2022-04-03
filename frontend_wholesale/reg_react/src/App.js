import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Redirect
} from "react-router-dom";
import * as ReactBootstrap from "react-bootstrap";

import Navbar from "./NavBar";
import Login from "./Login";
import Profile from "./Profile";
import DoctorProfile from "./DoctorProfile";
import Survey from "./Survey";
import DrugList from "./DrugList";
import DrugDetail from "./DrugDetail";
import VerifyOrders from "./VerifyOrder";

import "./App.css";

const USER_PROFILE_URL = "http://localhost:3001/profile ";
const ORDERS_URL = "http://localhost:3001/orders";
const DRUGS_URL = "http://localhost:3001/drugs";

class App extends React.Component {
  state = {
    currentUser: null,
    orders: [],
    drugs: []
  };

  componentDidMount() {
    let token = localStorage.getItem("jwt");
    // console.log(token);

    if (token) {
      // debugger;
      Promise.all([
        // fetch(opp_url),
        fetch(DRUGS_URL),
        fetch(ORDERS_URL),
        fetch(USER_PROFILE_URL, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then(res => res.json())
          .then(data => {
            // debugger;

            this.onChangeUser(data.user_data);
          })
      ])
        .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
        .then(([drugsFetch, ordersFetch]) =>
          this.setState({
            drugs: drugsFetch,
            orders: ordersFetch
          })
        );
    }
  }

  onChangeUser = user => {
    this.setState({ currentUser: user, userlogin: true });
    // debugger
  };

  render() {
    console.log(this.state.currentUser);
    let allDrugs = [...this.state.drugs];
    if (!this.state.currentUser) {
      return (
        <ReactBootstrap.Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </ReactBootstrap.Spinner>
      );
    }
    // const doctor = this.state.currentUser.category_id === "3";
    // console.log(doctor);
    return (
      <Router>
        <div className="App">
          <Navbar
            user={this.state.currentUser}
            onChangeUser={this.onChangeUser}
          />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/login" />} />
            <Route
              exact
              path="/login"
              render={() => {
                return this.state.currentUser === null ? (
                  <Login onChangeUser={this.onChangeUser} />
                ) : (
                  <Redirect to="/profile" />
                );
              }}
            />

            <Route
              exact
              path="/profile"
              render={() => {
                return this.state.currentUser === null ? (
                  <Redirect to="/login" />
                ) : (
                  <Profile
                    orders={this.state.orders}
                    drugs={this.state.drugs}
                    user={this.state.currentUser}
                  />
                );
              }}
            />
            <Route
              exact
              path="/doctorprofile"
              render={() => (
                <DoctorProfile
                  user={this.state.currentUser}
                  orders={this.state.orders}
                />
              )}
            />

            <Route
              exact
              path="/survey"
              render={() => <Survey user={this.state.currentUser} />}
            />
            <Route
              exact
              path="/verifyOrders"
              render={() => {
                return this.state.currentUser.category_id === "3" ? (
                  <VerifyOrders
                    doctor={this.state.currentUser}
                    orders={this.state.orders}
                  />
                ) : (
                  <Redirect to="/profile" />
                );
              }}
            />

            <Route
              exact
              path="/alldrugs"
              render={() => {
                return this.state.currentUser === null &&
                  this.state.drugs === null ? null : (
                  <DrugList
                    user={this.state.currentUser}
                    drugs={this.state.drugs}
                  />
                );
              }}
            />
            <Route
              path="/alldrugs/:drugId"
              render={props => {
                let selectedDrug = allDrugs.find(
                  drug => drug.id == props.match.params.drugId
                );

                // debugger
                return this.state.currentUser === null &&
                  this.state.drugs === null ? null : (
                  <DrugDetail
                    orders={this.state.orders}
                    drug={selectedDrug}
                    user={this.state.currentUser}
                  />
                );
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default withRouter(App);
