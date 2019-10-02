import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerFab = props => {
  return <System.Fab {...props}></System.Fab>;
};

export const Fab = withHOC(InnerFab);

Fab.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Fab, {
  classKey: {
    title: "Class key",
    type: ControlType.Array
  }
});
