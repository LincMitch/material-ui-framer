import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerCssBaseline = props => {
  return <System.CssBaseline {...props}></System.CssBaseline>;
};

export const CssBaseline = withHOC(InnerCssBaseline);

CssBaseline.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(CssBaseline, {});
