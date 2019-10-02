import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerLink = props => {
  return <System.Link {...props}></System.Link>;
};

export const Link = withHOC(InnerLink);

Link.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Link, {
  classKey: {
    title: "Class key",
    type: ControlType.Enum,
    options: [
      "root",
      "button",
      "focusVisible",
      "underlineNone",
      "underlineHover",
      "underlineAlways"
    ],
    optionTitles: [
      "root",
      "button",
      "focus Visible",
      "underline None",
      "underline Hover",
      "underline Always"
    ]
  }
});
