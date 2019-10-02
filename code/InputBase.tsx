import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerInputBase = props => {
  return <System.InputBase {...props}></System.InputBase>;
};

export const InputBase = withHOC(InnerInputBase);

InputBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(InputBase, {
  autoComplete: {
    title: "Auto complete",
    type: ControlType.String
  },
  autoFocus: {
    title: "Auto focus",
    type: ControlType.Boolean
  },
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean
  },
  endAdornment: {
    title: "End adornment",
    type: ControlType.String
  },
  error: {
    title: "Error",
    type: ControlType.Boolean
  },
  fullWidth: {
    title: "Full width",
    type: ControlType.Boolean
  },
  margin: {
    title: "Margin",
    type: ControlType.Enum,
    options: ["none", "dense"],
    optionTitles: ["none", "dense"]
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
  readOnly: {
    title: "Read only",
    type: ControlType.Boolean
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
  startAdornment: {
    title: "Start adornment",
    type: ControlType.String
  },
  type: {
    title: "Type",
    type: ControlType.String
  }
});
