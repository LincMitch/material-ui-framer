import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerFormControlLabel = props => {
  return <System.FormControlLabel {...props}></System.FormControlLabel>;
};

export const FormControlLabel = withHOC(InnerFormControlLabel);

FormControlLabel.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(FormControlLabel, {
  checked: {
    title: "Checked",
    type: ControlType.Boolean
  },
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean
  },
  label: {
    title: "Label",
    type: ControlType.String,
    defaultValue: "label"
  },
  name: {
    title: "Name",
    type: ControlType.String
  },
  labelPlacement: {
    title: "Label placement",
    type: ControlType.Enum,
    options: ["top", "bottom", "start", "end"],
    optionTitles: ["top", "bottom", "start", "end"]
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  }
});
