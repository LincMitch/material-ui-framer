import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerFormGroup = props => {
  return <System.FormGroup {...props}></System.FormGroup>;
};

export const FormGroup = withHOC(InnerFormGroup);

FormGroup.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(FormGroup, {
  row: {
    title: "Row",
    type: ControlType.Boolean
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  }
});
