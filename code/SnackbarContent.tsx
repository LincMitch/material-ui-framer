import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerSnackbarContent = props => {
  return <System.SnackbarContent {...props}></System.SnackbarContent>;
};

export const SnackbarContent = withHOC(InnerSnackbarContent);

SnackbarContent.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(SnackbarContent, {
  action: {
    title: "Action",
    type: ControlType.String
  },
  message: {
    title: "Message",
    type: ControlType.String
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  },
  elevation: {
    title: "Elevation",
    type: ControlType.Number
  },
  square: {
    title: "Square",
    type: ControlType.Boolean
  }
});
