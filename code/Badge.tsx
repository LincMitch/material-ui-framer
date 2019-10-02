import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerBadge = props => {
  return <System.Badge {...props}></System.Badge>;
};

export const Badge = withHOC(InnerBadge);

Badge.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Badge, {
  overlap: {
    title: "Overlap",
    type: ControlType.Enum,
    options: ["rectangle", "circle"],
    optionTitles: ["rectangle", "circle"]
  },
  badgeContent: {
    title: "Badge content",
    type: ControlType.String
  },
  children: {
    title: "Children",
    type: ControlType.String
  },
  color: {
    title: "Color",
    type: ControlType.Enum,
    options: ["primary", "secondary", "default", "error"],
    optionTitles: ["primary", "secondary", "default", "error"]
  },
  invisible: {
    title: "Invisible",
    type: ControlType.Boolean
  },
  max: {
    title: "Max",
    type: ControlType.Number
  },
  showZero: {
    title: "Show zero",
    type: ControlType.Boolean
  },
  variant: {
    title: "Variant",
    type: ControlType.Enum,
    options: ["dot", "standard"],
    optionTitles: ["dot", "standard"]
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  }
});
