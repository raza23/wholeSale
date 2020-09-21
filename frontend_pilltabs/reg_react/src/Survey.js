import React, { Component } from "react";
import * as ReactBootstrap from "react-bootstrap";
// import ToggleButton from "react-bootstrap/ToggleButton";

export default class Survey extends Component {
  render() {
    return (
      <div>
        <>
          {" "}
          Hello
          <ReactBootstrap.ToggleButtonGroup
            type="checkbox"
            defaultValue={[1]}
            className="mb-2"
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
          </ReactBootstrap.ToggleButtonGroup>
          <br />
          {/* <ReactBootstrap.ToggleButtonGroup
            type="radio"
            name="options"
            defaultValue={1}
          >
            <ToggleButton value={1}>Radio 1 (pre-checked)</ToggleButton>
            <ToggleButton value={2}>Radio 2</ToggleButton>
            <ToggleButton value={3}>Radio 3</ToggleButton>
          </ReactBootstrap.ToggleButtonGroup> */}
        </>
      </div>
    );
  }
}
