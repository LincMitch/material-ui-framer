import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerFade = props => {
  return <System.Fade {...props}></System.Fade>;
};

export const Fade = withHOC(InnerFade);

Fade.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Fade, {});
