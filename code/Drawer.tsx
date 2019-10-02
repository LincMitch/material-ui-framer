import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerDrawer = props => {
  return <System.Drawer {...props}></System.Drawer>;
};

export const Drawer = withHOC(InnerDrawer);

Drawer.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Drawer, {
  anchor: {
    title: "Anchor",
    type: ControlType.Enum,
    options: ["top", "right", "bottom", "left"],
    optionTitles: ["top", "right", "bottom", "left"]
  },
  children: {
    title: "Children",
    type: ControlType.String
  },
  elevation: {
    title: "Elevation",
    type: ControlType.Number
  },
  open: {
    title: "Open",
    type: ControlType.Boolean
  },
  transitionDuration: {
    title: "Transition duration",
    type: ControlType.Number
  },
  variant: {
    title: "Variant",
    type: ControlType.Enum,
    options: ["permanent", "persistent", "temporary"],
    optionTitles: ["permanent", "persistent", "temporary"]
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
  }
});
