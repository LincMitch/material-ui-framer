import * as React from "react";
import * as System from "@material-ui/core";
import {Frame, ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/DeleteTwoTone';
import CloudUploadIcon from '@material-ui/icons/CloudUploadTwoTone';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoiceTwoTone';
import SaveIcon from '@material-ui/icons/SaveTwoTone';

const iconMap = {
    // Use SVG spites instead.
    // Because can't convert String to component
    "delete": <DeleteIcon  />,
    "cloud-upload": <CloudUploadIcon  />,
    "save": <SaveIcon  />,
}

const InnerButton = props => {
  return <System.Button {...props} startIcon={iconMap[props.icon]}>{props.text}{props.children}</System.Button>;
};

export const Button = withHOC(InnerButton);

Button.defaultProps = {
  width: 250,
  height: 250,
  text: "Button"
};

addPropertyControls(Button, {
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
  icon: {
    title: "Icon",
    type: ControlType.Enum,
    options: Object.keys(iconMap),
  },  
});
