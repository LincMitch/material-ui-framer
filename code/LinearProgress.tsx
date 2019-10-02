import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerLinearProgress = props => {
  return <System.LinearProgress {...props}></System.LinearProgress>;
};

export const LinearProgress = withHOC(InnerLinearProgress);

LinearProgress.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(LinearProgress, {
  color: {
    title: "Color",
    type: ControlType.Enum,
    options: ["primary", "secondary"],
    optionTitles: ["primary", "secondary"]
  },
  value: {
    title: "Value",
    type: ControlType.Number
  },
  valueBuffer: {
    title: "Value buffer",
    type: ControlType.Number
  },
  variant: {
    title: "Variant",
    type: ControlType.Enum,
    options: ["indeterminate", "determinate", "buffer", "query"],
    optionTitles: ["indeterminate", "determinate", "buffer", "query"]
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  }
});
