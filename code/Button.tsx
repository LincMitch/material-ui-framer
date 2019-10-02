import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerButton = props => {
  return <System.Button {...props}></System.Button>;
};

export const Button = withHOC(InnerButton);

Button.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Button, {
  classKey: {
    title: "Class key",
    type: ControlType.Array
  }
});
