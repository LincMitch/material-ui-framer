import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIconButton = props => {
  return <System.IconButton {...props}></System.IconButton>;
};

export const IconButton = withHOC(InnerIconButton);

IconButton.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IconButton, {
  classKey: {
    title: "Class key",
    type: ControlType.Array
  }
});
