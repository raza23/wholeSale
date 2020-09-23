import React, { Component } from "react";
import * as ReactBootstrap from "react-bootstrap";
import { withRouter } from "react-router-dom";

class SurveyEdit extends Component {
  state = {
    answer1: this.props.user.answer1,
    answer2: this.props.user.answer2
  };

  handleAnswer1Change = e => {
    this.setState({ answer1: e });
    // debugger;
  };

  handleAnswer2Change = e => {
    this.setState({ answer2: e });
    // debugger;
  };

  render() {
    console.log(this.props);
    console.log(this.state);
    // debugger;
    const user = this.props.user;
    return (
      <div>
        <div>
          <>
            {" "}
            Question 1
            <ReactBootstrap.ToggleButtonGroup
              name="question1"
              type="radio"
              defaultValue={user.answer1}
              onChange={this.handleAnswer1Change}
              className="mb-2"
              variant="dark"
              size="sm"
            >
              <ReactBootstrap.ToggleButton value={1}>
                Checkbox 1*
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
              onChange={this.handleAnswer2Change}
              className="mb-2"
              variant="dark"
              size="sm"
            >
              <ReactBootstrap.ToggleButton value={1}>
                Checkbox 1*
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
            <input
              className="button"
              type="submit"
              value="Save"
              onClick={() =>
                this.props.saveEdit(
                  user.id,
                  this.state.answer1,
                  this.state.answer2
                )
              }
            />
          </>
        </div>
      </div>
    );
  }
}

export default withRouter(SurveyEdit);
