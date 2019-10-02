import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerTab = props => {
  return <System.Tab {...props}></System.Tab>;
};

export const Tab = withHOC(InnerTab);

Tab.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Tab, {
  classKey: {
    title: "Class key",
    type: ControlType.Array
  }
});
