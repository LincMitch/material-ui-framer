import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerPopover = props => {
  return <System.Popover {...props}></System.Popover>;
};

export const Popover = withHOC(InnerPopover);

Popover.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Popover, {
  anchorReference: {
    title: "Anchor reference",
    type: ControlType.Enum,
    options: ["none", "anchorEl", "anchorPosition"],
    optionTitles: ["none", "anchor El", "anchor Position"]
  },
  children: {
    title: "Children",
    type: ControlType.String
  },
  elevation: {
    title: "Elevation",
    type: ControlType.Number
  },
  marginThreshold: {
    title: "Margin threshold",
    type: ControlType.Number
  },
  modal: {
    title: "Modal",
    type: ControlType.Boolean
  },
  role: {
    title: "Role",
    type: ControlType.String
  },
  transitionDuration: {
    title: "Transition duration",
    type: ControlType.Enum,
    options: ["auto"],
    optionTitles: ["auto"]
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  },
  closeAfterTransition: {
    title: "Close after transition",
    type: ControlType.Boolean
  },
  disableAutoFocus: {
    title: "Disable auto focus",
    type: ControlType.Boolean
  },
  disableBackdropClick: {
    title: "Disable backdrop click",
    type: ControlType.Boolean
  },
  disableEnforceFocus: {
    title: "Disable enforce focus",
    type: ControlType.Boolean
  },
  disableEscapeKeyDown: {
    title: "Disable escape key down",
    type: ControlType.Boolean
  },
  disablePortal: {
    title: "Disable portal",
    type: ControlType.Boolean
  },
  disableRestoreFocus: {
    title: "Disable restore focus",
    type: ControlType.Boolean
  },
  disableScrollLock: {
    title: "Disable scroll lock",
    type: ControlType.Boolean
  },
  hideBackdrop: {
    title: "Hide backdrop",
    type: ControlType.Boolean
  },
  keepMounted: {
    title: "Keep mounted",
    type: ControlType.Boolean
  },
  open: {
    title: "Open",
    type: ControlType.Boolean
  }
});
