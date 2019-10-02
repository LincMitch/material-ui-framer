import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerStepContent = props => {
  return <System.StepContent {...props}></System.StepContent>;
};

export const StepContent = withHOC(InnerStepContent);

StepContent.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StepContent, {
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
  last: {
    title: "Last",
    type: ControlType.Boolean
  },
  optional: {
    title: "Optional",
    type: ControlType.Boolean
  },
  orientation: {
    title: "Orientation",
    type: ControlType.Enum,
    options: ["horizontal", "vertical"],
    optionTitles: ["horizontal", "vertical"]
  },
  transitionDuration: {
    title: "Transition duration",
    type: ControlType.Enum,
    options: ["auto"],
    optionTitles: ["auto"]
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  }
});
