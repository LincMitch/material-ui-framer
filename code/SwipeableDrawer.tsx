import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerSwipeableDrawer = props => {
  return <System.SwipeableDrawer {...props}></System.SwipeableDrawer>;
};

export const SwipeableDrawer = withHOC(InnerSwipeableDrawer);

SwipeableDrawer.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(SwipeableDrawer, {
  disableBackdropTransition: {
    title: "Disable backdrop transition",
    type: ControlType.Boolean
  },
  disableDiscovery: {
    title: "Disable discovery",
    type: ControlType.Boolean
  },
  disableSwipeToOpen: {
    title: "Disable swipe to open",
    type: ControlType.Boolean
  },
  hysteresis: {
    title: "Hysteresis",
    type: ControlType.Number
  },
  minFlingVelocity: {
    title: "Min fling velocity",
    type: ControlType.Number
  },
  open: {
    title: "Open",
    type: ControlType.Boolean
  },
  swipeAreaWidth: {
    title: "Swipe area width",
    type: ControlType.Number
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  },
  children: {
    title: "Children",
    type: ControlType.String
  },
  elevation: {
    title: "Elevation",
    type: ControlType.Number
  },
  variant: {
    title: "Variant",
    type: ControlType.Enum,
    options: ["permanent", "persistent", "temporary"],
    optionTitles: ["permanent", "persistent", "temporary"]
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
  transitionDuration: {
    title: "Transition duration",
    type: ControlType.Number
  },
  anchor: {
    title: "Anchor",
    type: ControlType.Enum,
    options: ["top", "right", "bottom", "left"],
    optionTitles: ["top", "right", "bottom", "left"]
  }
});
