import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerZoom = props => {
  return <System.Zoom {...props}></System.Zoom>;
};

export const Zoom = withHOC(InnerZoom);

Zoom.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Zoom, {});
