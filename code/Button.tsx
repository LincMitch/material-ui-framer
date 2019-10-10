import * as React from "react";
import * as System from "@material-ui/core";
import {Frame, ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import { cloneFrameless } from "./tools/framerx-utils";

type Props = {
  externalStartIcon: React.ReactNode;
  externalEndIcon: React.ReactNode;
};

const InnerButton = props => {
  const { externalStartIcon, externalEndIcon, ...rest } = props;
  let startIconElement;
  let endIconElement;
  startIconElement = cloneFrameless(externalStartIcon);
  endIconElement = cloneFrameless(externalEndIcon);
  return (
    <System.Button {...rest}
    startIcon={startIconElement}
    endIcon={endIconElement}
    >
      {props.text}
    </System.Button>
  );
};

export const Button = withHOC(InnerButton);

Button.defaultProps = {
  width: 250,
  height: 250,
  text: "Button"
};

addPropertyControls(Button, {
  externalStartIcon: {
    type: ControlType.ComponentInstance,
    title: "Start Icon"
  },
  externalEndIcon: {
    type: ControlType.ComponentInstance,
    title: "End Icon"
  },
  text: {
    title: "Text",
    type: ControlType.String
  },
  children: {
    title: "Children",
    type: ControlType.ComponentInstance,
  },
  //whats this?
//   classKey: {
//     title: "Class key",
//     type: ControlType.Enum,
//   options: [
//     "root",
//     "label",
//     "text",
//     "label",
//     "textPrimary",
//     "textSecondary",
//     "outlined",
//     "outlinedPrimary",
//     "outlinedSecondary",
//     "contained",
//     "containedPrimary",
//     "containedSecondary",
//     "focusVisible",
//     "disabled",
//     "colorInherit",
//     "sizeSmall",
//     "sizeLarge",
//     "fullWidth",
//   ],
//   optionTitles: [
//     "Root",
//     "Label",
//     "Text",
//     "Label",
//     "Text Primary",
//     "Text Secondary",
//     "Outlined",
//     "OutlinedPrimary",
//     "OutlinedSecondary",
//     "Contained",
//     "ContainedPrimary",
//     "ContainedSecondary",
//     "FocusVisible",
//     "Disabled",
//     "SolorInherit",
//     "SizeSmall",
//     "SizeLarge",
//     "FullWidth",
//   ],
// },
  // classes??
  color: {
    title: "Color",
    type: ControlType.Enum,
    options: [
      "inherit",
      "primary",
      "secondary",
      "error",
      "initial",
      "textPrimary",
      "textSecondary"
    ],
    optionTitles: [
      "inherit",
      "primary",
      "secondary",
      "error",
      "initial",
      "text Primary",
      "text Secondary"
    ]
  },
  //component?
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean
  },
  disableFocusRipple: {
    title: "Disable focus ripple",
    type: ControlType.Boolean
  },
  disableRipple: {
    title: "Disable ripple",
    type: ControlType.Boolean
  },
  fullWidth: {
    title: "Full width",
    type: ControlType.Boolean
  },
  href: {
    title: "href",
    type: ControlType.String
  },
  size: {
    title: "Color",
    type: ControlType.Enum,
    options: [
      "small",
      "medium",
      "large",
    ],
    optionTitles: [
      "Small",
      "Medium",
      "Large",
    ]
  },
  variant: {
    title: "Variant",
    type: ControlType.Enum,
    options: [
      "text",
      "outlined",
      "contained",
    ],
    optionTitles: [
      "Text",
      "Outlined",
      "Contained",
    ]
  }, 
});
