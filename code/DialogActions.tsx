import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerDialogActions = props => {
  return <System.DialogActions {...props}></System.DialogActions>;
};

export const DialogActions = withHOC(InnerDialogActions);

DialogActions.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(DialogActions, {
  disableSpacing: {
    title: "Disable spacing",
    type: ControlType.Boolean
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  }
});
