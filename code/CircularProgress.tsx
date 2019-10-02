import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerCircularProgress = props => {
  return <System.CircularProgress {...props}></System.CircularProgress>;
};

export const CircularProgress = withHOC(InnerCircularProgress);

CircularProgress.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(CircularProgress, {
  color: {
    title: "Color",
    type: ControlType.Enum,
    options: ["inherit", "primary", "secondary"],
    optionTitles: ["inherit", "primary", "secondary"]
  },
  disableShrink: {
    title: "Disable shrink",
    type: ControlType.Boolean
  },
  size: {
    title: "Size",
    type: ControlType.String
  },
  thickness: {
    title: "Thickness",
    type: ControlType.Number
  },
  value: {
    title: "Value",
    type: ControlType.Number
  },
  variant: {
    title: "Variant",
    type: ControlType.Enum,
    options: ["static", "indeterminate", "determinate"],
    optionTitles: ["static", "indeterminate", "determinate"]
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  }
});
