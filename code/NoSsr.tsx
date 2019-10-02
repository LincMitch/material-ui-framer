import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerNoSsr = props => {
  return <System.NoSsr {...props}></System.NoSsr>;
};

export const NoSsr = withHOC(InnerNoSsr);

NoSsr.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(NoSsr, {
  children: {
    title: "Children",
    type: ControlType.String
  },
  defer: {
    title: "Defer",
    type: ControlType.Boolean
  },
  fallback: {
    title: "Fallback",
    type: ControlType.String
  }
});
