import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerSvgIcon = props => {
  return <System.SvgIcon {...props}></System.SvgIcon>;
};

export const SvgIcon = withHOC(InnerSvgIcon);

SvgIcon.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(SvgIcon, {
  children: {
    title: "Children",
    type: ControlType.String
  },
  color: {
    title: "Color",
    type: ControlType.Enum,
    options: ["inherit", "primary", "secondary", "error", "disabled", "action"],
    optionTitles: [
      "inherit",
      "primary",
      "secondary",
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
  htmlColor: {
    title: "Html color",
    type: ControlType.Color,
    defaultValue: "#09F"
  },
  shapeRendering: {
    title: "Shape rendering",
    type: ControlType.String
  },
  titleAccess: {
    title: "Title access",
    type: ControlType.String,
    defaultValue: "titleAccess"
  },
  viewBox: {
    title: "View box",
    type: ControlType.String
  },
  ref: {
    title: "Ref",
    type: ControlType.String
  }
});
