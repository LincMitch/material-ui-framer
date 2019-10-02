import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerAppBar = props => {
  return <System.AppBar {...props}></System.AppBar>;
};

export const AppBar = withHOC(InnerAppBar);

AppBar.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(AppBar, {
  color: {
    title: "Color",
    type: ControlType.Enum,
    options: ["inherit", "primary", "secondary", "default"],
    optionTitles: ["inherit", "primary", "secondary", "default"]
  },
  position: {
    title: "Position",
    type: ControlType.Enum,
    options: ["fixed", "absolute", "sticky", "static", "relative"],
    optionTitles: ["fixed", "absolute", "sticky", "static", "relative"]
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  },
  elevation: {
    title: "Elevation",
    type: ControlType.Number
  },
  square: {
    title: "Square",
    type: ControlType.Boolean
  }
});
