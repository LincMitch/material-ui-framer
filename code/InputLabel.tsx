import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerInputLabel = props => {
  return <System.InputLabel {...props}></System.InputLabel>;
};

export const InputLabel = withHOC(InnerInputLabel);

InputLabel.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(InputLabel, {
  disableAnimation: {
    title: "Disable animation",
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
  focused: {
    title: "Focused",
    type: ControlType.Boolean
  },
  margin: {
    title: "Margin",
    type: ControlType.Array
  },
  required: {
    title: "Required",
    type: ControlType.Boolean
  },
  shrink: {
    title: "Shrink",
    type: ControlType.Boolean
  },
  variant: {
    title: "Variant",
    type: ControlType.Enum,
    options: ["standard", "outlined", "filled"],
    optionTitles: ["standard", "outlined", "filled"]
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  },
  filled: {
    title: "Filled",
    type: ControlType.Boolean
  }
});
