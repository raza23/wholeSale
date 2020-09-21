import React, { Component } from "react";
import * as ReactBootstrap from "react-bootstrap";
import { withRouter } from "react-router-dom";
// import ToggleButton from "react-bootstrap/ToggleButton";

class Survey extends Component {
  render() {
    const user = this.props.user;
    // debugger;
    // * user isnt null, it just needs to wait for the user to fetch
    console.log(user);
    return (
      <div>
        <>
          {" "}
          Question 1
          <ReactBootstrap.ToggleButtonGroup
            name="question1"
            type="radio"
            defaultValue={user.answer1}
            className="mb-2"
            variant="dark"
            size="sm"
          >
            <ReactBootstrap.ToggleButton value={1}>
              Checkbox 1
            </ReactBootstrap.ToggleButton>
            <ReactBootstrap.ToggleButton value={2}>
              Checkbox 2*
            </ReactBootstrap.ToggleButton>
            <ReactBootstrap.ToggleButton value={3}>
              Checkbox 3
            </ReactBootstrap.ToggleButton>
            <ReactBootstrap.ToggleButton value={4}>
              Checkbox 4
            </ReactBootstrap.ToggleButton>
            <ReactBootstrap.ToggleButton value={5}>
              Checkbox 5
            </ReactBootstrap.ToggleButton>
          </ReactBootstrap.ToggleButtonGroup>
          <br />
        </>
        <>
          {" "}
          Question 2
          <ReactBootstrap.ToggleButtonGroup
            name="question1"
            type="radio"
            defaultValue={user.answer2}
            className="mb-2"
            variant="dark"
            size="sm"
          >
            <ReactBootstrap.ToggleButton value={1}>
              Checkbox 1
            </ReactBootstrap.ToggleButton>
            <ReactBootstrap.ToggleButton value={2}>
              Checkbox 2
            </ReactBootstrap.ToggleButton>
            <ReactBootstrap.ToggleButton value={3}>
              Checkbox 3
            </ReactBootstrap.ToggleButton>
            <ReactBootstrap.ToggleButton value={4}>
              Checkbox 4
            </ReactBootstrap.ToggleButton>
            <ReactBootstrap.ToggleButton value={5}>
              Checkbox 5*
            </ReactBootstrap.ToggleButton>
          </ReactBootstrap.ToggleButtonGroup>
          <br />
        </>
      </div>
    );
  }
}

// another type of button
//   <div>
//     hi
//     <ReactBootstrap.ButtonToolbar
//       className="mb-3"
//       aria-label="Toolbar with Button groups"
//     >
//       <ReactBootstrap.ButtonGroup
//         className="mr-2"
//         aria-label="First group"
//       >
//         <ReactBootstrap.Button variant="secondary">
//           1
//         </ReactBootstrap.Button>{" "}
//         <ReactBootstrap.Button variant="secondary">
//           2
//         </ReactBootstrap.Button>{" "}
//         <ReactBootstrap.Button variant="secondary">
//           3
//         </ReactBootstrap.Button>{" "}
//         <ReactBootstrap.Button variant="secondary">
//           4
//         </ReactBootstrap.Button>
//       </ReactBootstrap.ButtonGroup>
//     </ReactBootstrap.ButtonToolbar>

//   </div>

export default withRouter(Survey);
