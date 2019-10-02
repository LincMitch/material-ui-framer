import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerStep = props => {
  return <System.Step {...props}></System.Step>;
};

export const Step = withHOC(InnerStep);

Step.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Step, {
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
  index: {
    title: "Index",
    type: ControlType.Number
  },
  last: {
    title: "Last",
    type: ControlType.Boolean
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
