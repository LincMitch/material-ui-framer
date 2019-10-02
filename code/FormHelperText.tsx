import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerFormHelperText = props => {
  return <System.FormHelperText {...props}></System.FormHelperText>;
};

export const FormHelperText = withHOC(InnerFormHelperText);

FormHelperText.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(FormHelperText, {
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean
  },
  error: {
    title: "Error",
    type: ControlType.Boolean
  },
  filled: {
    title: "Filled",
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
  }
});
