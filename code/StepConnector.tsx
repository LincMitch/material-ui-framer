import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerStepConnector = props => {
  return <System.StepConnector {...props}></System.StepConnector>;
};

export const StepConnector = withHOC(InnerStepConnector);

StepConnector.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StepConnector, {
  active: {
    title: "Active",
    type: ControlType.Boolean
  },
  alternativeLabel: {
    title: "Alternative label",
    type: ControlType.Boolean
  },
  completed: {
    title: "Completed",
    type: ControlType.Boolean
  },
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean
  },
  index: {
    title: "Index",
    type: ControlType.Number
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
