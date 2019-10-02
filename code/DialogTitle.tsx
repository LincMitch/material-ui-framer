import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerDialogTitle = props => {
  return <System.DialogTitle {...props}></System.DialogTitle>;
};

export const DialogTitle = withHOC(InnerDialogTitle);

DialogTitle.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(DialogTitle, {
  disableTypography: {
    title: "Disable typography",
    type: ControlType.Boolean
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  }
});
