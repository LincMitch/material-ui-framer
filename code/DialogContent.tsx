import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerDialogContent = props => {
  return <System.DialogContent {...props}></System.DialogContent>;
};

export const DialogContent = withHOC(InnerDialogContent);

DialogContent.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(DialogContent, {
  dividers: {
    title: "Dividers",
    type: ControlType.Boolean
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  }
});
