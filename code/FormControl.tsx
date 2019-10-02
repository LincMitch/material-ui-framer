import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerFormControl = props => {
  return <System.FormControl {...props}></System.FormControl>;
};

export const FormControl = withHOC(InnerFormControl);

FormControl.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(FormControl, {
  classKey: {
    title: "Class key",
    type: ControlType.Enum,
    options: ["root", "fullWidth", "marginDense", "marginNormal"],
    optionTitles: ["root", "full Width", "margin Dense", "margin Normal"]
  }
});
