import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerInputAdornment = props => {
  return <System.InputAdornment {...props}></System.InputAdornment>;
};

export const InputAdornment = withHOC(InnerInputAdornment);

InputAdornment.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(InputAdornment, {
  disablePointerEvents: {
    title: "Disable pointer events",
    type: ControlType.Boolean
  },
  disableTypography: {
    title: "Disable typography",
    type: ControlType.Boolean
  },
  position: {
    title: "Position",
    type: ControlType.Enum,
    options: ["start", "end"],
    optionTitles: ["start", "end"]
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
