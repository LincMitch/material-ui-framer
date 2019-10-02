import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerSlide = props => {
  return <System.Slide {...props}></System.Slide>;
};

export const Slide = withHOC(InnerSlide);

Slide.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Slide, {
  direction: {
    title: "Direction",
    type: ControlType.Enum,
    options: ["right", "left", "up", "down"],
    optionTitles: ["right", "left", "up", "down"]
  }
});
