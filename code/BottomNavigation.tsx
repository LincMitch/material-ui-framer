import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerBottomNavigation = props => {
  return <System.BottomNavigation {...props}></System.BottomNavigation>;
};

export const BottomNavigation = withHOC(InnerBottomNavigation);

BottomNavigation.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(BottomNavigation, {
  showLabels: {
    title: "Show labels",
    type: ControlType.Boolean
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  }
});
