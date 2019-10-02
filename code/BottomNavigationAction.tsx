import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerBottomNavigationAction = props => {
  return (
    <System.BottomNavigationAction {...props}></System.BottomNavigationAction>
  );
};

export const BottomNavigationAction = withHOC(InnerBottomNavigationAction);

BottomNavigationAction.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(BottomNavigationAction, {
  classKey: {
    title: "Class key",
    type: ControlType.Array
  }
});
