import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerStepLabel = props => {
  return <System.StepLabel {...props}></System.StepLabel>;
};

export const StepLabel = withHOC(InnerStepLabel);

StepLabel.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StepLabel, {
  active: {
    title: "Active",
    type: ControlType.Boolean
  },
  alternativeLabel: {
    title: "Alternative label",
    type: ControlType.Boolean
  },
  children: {
    title: "Children",
    type: ControlType.String
  },
  completed: {
    title: "Completed",
    type: ControlType.Boolean
  },
  disabled: {
    title: "Disabled",
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
  last: {
    title: "Last",
    type: ControlType.Boolean
  },
  optional: {
    title: "Optional",
    type: ControlType.String
  },
  orientation: {
    title: "Orientation",
    type: ControlType.Enum,
    options: ["horizontal", "vertical"],
    optionTitles: ["horizontal", "vertical"]
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  }
});
