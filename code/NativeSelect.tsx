import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerNativeSelect = props => {
  return <System.NativeSelect {...props}></System.NativeSelect>;
};

export const NativeSelect = withHOC(InnerNativeSelect);

NativeSelect.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(NativeSelect, {
  input: {
    title: "Input",
    type: ControlType.String
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
