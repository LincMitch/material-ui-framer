import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerMenu = props => {
  return <System.Menu {...props}></System.Menu>;
};

export const Menu = withHOC(InnerMenu);

Menu.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Menu, {
  autoFocus: {
    title: "Auto focus",
    type: ControlType.Boolean
  },
  disableAutoFocusItem: {
    title: "Disable auto focus item",
    type: ControlType.Boolean
  },
  transitionDuration: {
    title: "Transition duration",
    type: ControlType.Enum,
    options: ["auto"],
    optionTitles: ["auto"]
  },
  variant: {
    title: "Variant",
    type: ControlType.Enum,
    options: ["menu", "selectedMenu"],
    optionTitles: ["menu", "selected Menu"]
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  },
  role: {
    title: "Role",
    type: ControlType.String
  },
  children: {
    title: "Children",
    type: ControlType.String
  },
  elevation: {
    title: "Elevation",
    type: ControlType.Number
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
  },
  modal: {
    title: "Modal",
    type: ControlType.Boolean
  },
  anchorReference: {
    title: "Anchor reference",
    type: ControlType.Enum,
    options: ["none", "anchorEl", "anchorPosition"],
    optionTitles: ["none", "anchor El", "anchor Position"]
  },
  marginThreshold: {
    title: "Margin threshold",
    type: ControlType.Number
  }
});
