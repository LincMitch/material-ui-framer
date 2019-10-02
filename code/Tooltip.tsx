import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerTooltip = props => {
  return <System.Tooltip {...props}></System.Tooltip>;
};

export const Tooltip = withHOC(InnerTooltip);

Tooltip.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Tooltip, {
  disableFocusListener: {
    title: "Disable focus listener",
    type: ControlType.Boolean
  },
  disableHoverListener: {
    title: "Disable hover listener",
    type: ControlType.Boolean
  },
  disableTouchListener: {
    title: "Disable touch listener",
    type: ControlType.Boolean
  },
  enterDelay: {
    title: "Enter delay",
    type: ControlType.Number
  },
  enterTouchDelay: {
    title: "Enter touch delay",
    type: ControlType.Number
  },
  interactive: {
    title: "Interactive",
    type: ControlType.Boolean
  },
  leaveDelay: {
    title: "Leave delay",
    type: ControlType.Number
  },
  leaveTouchDelay: {
    title: "Leave touch delay",
    type: ControlType.Number
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
  title: {
    title: "Title",
    type: ControlType.String,
    defaultValue: "title"
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  }
});
