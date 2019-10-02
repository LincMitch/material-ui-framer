import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerStepButton = props => {
  return <System.StepButton {...props}></System.StepButton>;
};

export const StepButton = withHOC(InnerStepButton);

StepButton.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StepButton, {
  classKey: {
    title: "Class key",
    type: ControlType.Array
  }
});
