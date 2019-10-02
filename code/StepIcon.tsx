import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerStepIcon = props => {
  return <System.StepIcon {...props}></System.StepIcon>;
};

export const StepIcon = withHOC(InnerStepIcon);

StepIcon.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StepIcon, {
  active: {
    title: "Active",
    type: ControlType.Boolean
  },
  completed: {
    title: "Completed",
    type: ControlType.Boolean
  },
  error: {
    title: "Error",
    type: ControlType.Boolean
  },
  icon: {
    title: "Icon",
    type: ControlType.String
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  }
});
