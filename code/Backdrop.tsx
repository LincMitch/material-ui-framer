import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerBackdrop = props => {
  return <System.Backdrop {...props}></System.Backdrop>;
};

export const Backdrop = withHOC(InnerBackdrop);

Backdrop.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Backdrop, {
  invisible: {
    title: "Invisible",
    type: ControlType.Boolean
  },
  open: {
    title: "Open",
    type: ControlType.Boolean
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
