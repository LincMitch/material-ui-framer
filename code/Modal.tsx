import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerModal = props => {
  return <System.Modal {...props}></System.Modal>;
};

export const Modal = withHOC(InnerModal);

Modal.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Modal, {
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
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  }
});
