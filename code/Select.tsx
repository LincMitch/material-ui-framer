import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerSelect = props => {
  return <System.Select {...props}></System.Select>;
};

export const Select = withHOC(InnerSelect);

Select.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Select, {
  autoWidth: {
    title: "Auto width",
    type: ControlType.Boolean
  },
  displayEmpty: {
    title: "Display empty",
    type: ControlType.Boolean
  },
  input: {
    title: "Input",
    type: ControlType.String
  },
  labelWidth: {
    title: "Label width",
    type: ControlType.Number
  },
  multiple: {
    title: "Multiple",
    type: ControlType.Boolean
  },
  native: {
    title: "Native",
    type: ControlType.Boolean
  },
  open: {
    title: "Open",
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
  error: {
    title: "Error",
    type: ControlType.Boolean
  },
  margin: {
    title: "Margin",
    type: ControlType.Enum,
    options: ["none", "dense"],
    optionTitles: ["none", "dense"]
  },
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean
  },
  fullWidth: {
    title: "Full width",
    type: ControlType.Boolean
  },
  autoFocus: {
    title: "Auto focus",
    type: ControlType.Boolean
  },
  name: {
    title: "Name",
    type: ControlType.String
  },
  type: {
    title: "Type",
    type: ControlType.String
  },
  readOnly: {
    title: "Read only",
    type: ControlType.Boolean
  },
  required: {
    title: "Required",
    type: ControlType.Boolean
  },
  multiline: {
    title: "Multiline",
    type: ControlType.Boolean
  },
  autoComplete: {
    title: "Auto complete",
    type: ControlType.String
  },
  endAdornment: {
    title: "End adornment",
    type: ControlType.String
  },
  rows: {
    title: "Rows",
    type: ControlType.String
  },
  rowsMax: {
    title: "Rows max",
    type: ControlType.String
  },
  startAdornment: {
    title: "Start adornment",
    type: ControlType.String
  },
  disableUnderline: {
    title: "Disable underline",
    type: ControlType.Boolean
  }
});
