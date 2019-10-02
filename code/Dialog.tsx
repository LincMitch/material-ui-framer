import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerDialog = props => {
  return <System.Dialog {...props}></System.Dialog>;
};

export const Dialog = withHOC(InnerDialog);

Dialog.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Dialog, {
  children: {
    title: "Children",
    type: ControlType.String
  },
  fullScreen: {
    title: "Full screen",
    type: ControlType.Boolean
  },
  fullWidth: {
    title: "Full width",
    type: ControlType.Boolean
  },
  maxWidth: {
    title: "Max width",
    type: ControlType.Enum,
    options: ["xs", "sm", "md", "lg", "xl"],
    optionTitles: ["xs", "sm", "md", "lg", "xl"]
  },
  scroll: {
    title: "Scroll",
    type: ControlType.Enum,
    options: ["body", "paper"],
    optionTitles: ["body", "paper"]
  },
  transitionDuration: {
    title: "Transition duration",
    type: ControlType.Number
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
