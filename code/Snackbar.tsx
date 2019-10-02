import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerSnackbar = props => {
  return <System.Snackbar {...props}></System.Snackbar>;
};

export const Snackbar = withHOC(InnerSnackbar);

Snackbar.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Snackbar, {
  action: {
    title: "Action",
    type: ControlType.String
  },
  autoHideDuration: {
    title: "Auto hide duration",
    type: ControlType.Number
  },
  disableWindowBlurListener: {
    title: "Disable window blur listener",
    type: ControlType.Boolean
  },
  message: {
    title: "Message",
    type: ControlType.String
  },
  open: {
    title: "Open",
    type: ControlType.Boolean
  },
  resumeHideDuration: {
    title: "Resume hide duration",
    type: ControlType.Number
  },
  transitionDuration: {
    title: "Transition duration",
    type: ControlType.Number
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  }
});
