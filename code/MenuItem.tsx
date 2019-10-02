import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerMenuItem = props => {
  return <System.MenuItem {...props}></System.MenuItem>;
};

export const MenuItem = withHOC(InnerMenuItem);

MenuItem.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(MenuItem, {});
