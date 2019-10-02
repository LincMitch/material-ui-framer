import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerBox = props => {
  return <System.Box {...props}></System.Box>;
};

export const Box = withHOC(InnerBox);

Box.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Box, {
  clone: {
    title: "Clone",
    type: ControlType.Boolean
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  }
});
