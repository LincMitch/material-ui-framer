import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerPopper = props => {
  return <System.Popper {...props}></System.Popper>;
};

export const Popper = withHOC(InnerPopper);

Popper.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Popper, {
  children: {
    title: "Children",
    type: ControlType.String
  },
  disablePortal: {
    title: "Disable portal",
    type: ControlType.Boolean
  },
  keepMounted: {
    title: "Keep mounted",
    type: ControlType.Boolean
  },
  open: {
    title: "Open",
    type: ControlType.Boolean
  },
  placement: {
    title: "Placement",
    type: ControlType.Enum,
    options: [
      "top",
      "right",
      "bottom",
      "left",
      "bottom-end",
      "bottom-start",
      "left-end",
      "left-start",
      "right-end",
      "right-start",
      "top-end",
      "top-start"
    ],
    optionTitles: [
      "top",
      "right",
      "bottom",
      "left",
      "bottom end",
      "bottom start",
      "left end",
      "left start",
      "right end",
      "right start",
      "top end",
      "top start"
    ]
  },
  transition: {
    title: "Transition",
    type: ControlType.Boolean
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  }
});
