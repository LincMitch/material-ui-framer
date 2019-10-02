import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerRootRef = props => {
  return <System.RootRef {...props}></System.RootRef>;
};

export const RootRef = withHOC(InnerRootRef);

RootRef.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(RootRef, {});
