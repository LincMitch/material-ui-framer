import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIcon = props => {
  return <System.Icon {...props}></System.Icon>;
};

export const Icon = withHOC(InnerIcon);

Icon.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Icon, {
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
