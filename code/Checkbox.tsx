import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerCheckbox = props => {
  return <System.Checkbox {...props}></System.Checkbox>;
};

export const Checkbox = withHOC(InnerCheckbox);

Checkbox.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Checkbox, {
  checkedIcon: {
    title: "Checked icon",
    type: ControlType.String
  },
  color: {
    title: "Color",
    type: ControlType.Enum,
    options: ["primary", "secondary", "default"],
    optionTitles: ["primary", "secondary", "default"]
  },
  icon: {
    title: "Icon",
    type: ControlType.String
  },
  indeterminate: {
    title: "Indeterminate",
    type: ControlType.Boolean
  },
  indeterminateIcon: {
    title: "Indeterminate icon",
    type: ControlType.String
  },
  defaultChecked: {
    title: "Default checked",
    type: ControlType.Boolean
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  },
  tabIndex: {
    title: "Tab index",
    type: ControlType.Number
  },
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean
  },
  checked: {
    title: "Checked",
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
  centerRipple: {
    title: "Center ripple",
    type: ControlType.Boolean
  },
  disableRipple: {
    title: "Disable ripple",
    type: ControlType.Boolean
  },
  disableTouchRipple: {
    title: "Disable touch ripple",
    type: ControlType.Boolean
  },
  focusRipple: {
    title: "Focus ripple",
    type: ControlType.Boolean
  },
  focusVisibleClassName: {
    title: "Focus visible class name",
    type: ControlType.String
  },
  disableFocusRipple: {
    title: "Disable focus ripple",
    type: ControlType.Boolean
  },
  edge: {
    title: "Edge",
    type: ControlType.Enum,
    options: ["start", "end"],
    optionTitles: ["start", "end"]
  },
  size: {
    title: "Size",
    type: ControlType.Enum,
    options: ["small", "medium"],
    optionTitles: ["small", "medium"]
  },
  readOnly: {
    title: "Read only",
    type: ControlType.Boolean
  },
  required: {
    title: "Required",
    type: ControlType.Boolean
  }
});
