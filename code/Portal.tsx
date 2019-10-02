import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerPortal = props => {
  return <System.Portal {...props}></System.Portal>;
};

export const Portal = withHOC(InnerPortal);

Portal.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Portal, {
  children: {
    title: "Children",
    type: ControlType.String
  },
  disablePortal: {
    title: "Disable portal",
    type: ControlType.Boolean
  }
});
