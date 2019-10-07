import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import DeleteIcon from '@material-ui/icons/Delete';

const InnerIcon = props => {
  return <System.Icon {...props}>
    <DeleteIcon />
  </System.Icon>;
};

export const StartIcon = withHOC(InnerIcon);

StartIcon.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StartIcon, {
  color: {
    title: "Color",
    type: ControlType.Enum,
    options: [
      "inherit",
      "primary",
      "secondary",
      "default",
      "error",
      "disabled",
      "action"
    ],
    optionTitles: [
      "inherit",
      "primary",
      "secondary",
      "default",
      "error",
      "disabled",
      "action"
    ]
  },
  fontSize: {
    title: "Font size",
    type: ControlType.Enum,
    options: ["inherit", "default", "small", "large"],
    optionTitles: ["inherit", "default", "small", "large"]
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  }
});
