import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerTextField = props => {
  return <System.TextField {...props}></System.TextField>;
};

export const TextField = withHOC(InnerTextField);

TextField.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(TextField, {
  variant: {
    title: "Variant",
    type: ControlType.Array
  },
  autoComplete: {
    title: "Auto complete",
    type: ControlType.String
  },
  autoFocus: {
    title: "Auto focus",
    type: ControlType.Boolean
  },
  children: {
    title: "Children",
    type: ControlType.String
  },
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean
  },
  error: {
    title: "Error",
    type: ControlType.Boolean
  },
  fullWidth: {
    title: "Full width",
    type: ControlType.Boolean
  },
  helperText: {
    title: "Helper text",
    type: ControlType.String,
    defaultValue: "helperText"
  },
  label: {
    title: "Label",
    type: ControlType.String,
    defaultValue: "label"
  },
  margin: {
    title: "Margin",
    type: ControlType.Enum,
    options: ["none", "dense", "normal"],
    optionTitles: ["none", "dense", "normal"]
  },
  multiline: {
    title: "Multiline",
    type: ControlType.Boolean
  },
  name: {
    title: "Name",
    type: ControlType.String
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  },
  required: {
    title: "Required",
    type: ControlType.Boolean
  },
  rows: {
    title: "Rows",
    type: ControlType.String
  },
  rowsMax: {
    title: "Rows max",
    type: ControlType.String
  },
  select: {
    title: "Select",
    type: ControlType.Boolean
  },
  type: {
    title: "Type",
    type: ControlType.String
  },
  hiddenLabel: {
    title: "Hidden label",
    type: ControlType.Boolean
  }
});
