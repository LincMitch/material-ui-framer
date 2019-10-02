import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerHidden = props => {
  return <System.Hidden {...props}></System.Hidden>;
};

export const Hidden = withHOC(InnerHidden);

Hidden.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Hidden, {
  implementation: {
    title: "Implementation",
    type: ControlType.Enum,
    options: ["js", "css"],
    optionTitles: ["js", "css"]
  },
  initialWidth: {
    title: "Initial width",
    type: ControlType.Enum,
    options: ["xs", "sm", "md", "lg", "xl"],
    optionTitles: ["xs", "sm", "md", "lg", "xl"]
  },
  lgDown: {
    title: "Lg down",
    type: ControlType.Boolean
  },
  lgUp: {
    title: "Lg up",
    type: ControlType.Boolean
  },
  mdDown: {
    title: "Md down",
    type: ControlType.Boolean
  },
  mdUp: {
    title: "Md up",
    type: ControlType.Boolean
  },
  only: {
    title: "Only",
    type: ControlType.Enum,
    options: ["xs", "sm", "md", "lg", "xl"],
    optionTitles: ["xs", "sm", "md", "lg", "xl"]
  },
  smDown: {
    title: "Sm down",
    type: ControlType.Boolean
  },
  smUp: {
    title: "Sm up",
    type: ControlType.Boolean
  },
  xlDown: {
    title: "Xl down",
    type: ControlType.Boolean
  },
  xlUp: {
    title: "Xl up",
    type: ControlType.Boolean
  },
  xsDown: {
    title: "Xs down",
    type: ControlType.Boolean
  },
  xsUp: {
    title: "Xs up",
    type: ControlType.Boolean
  }
});
