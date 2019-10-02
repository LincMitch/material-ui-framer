import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerMobileStepper = props => {
  return <System.MobileStepper {...props}></System.MobileStepper>;
};

export const MobileStepper = withHOC(InnerMobileStepper);

MobileStepper.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(MobileStepper, {
  activeStep: {
    title: "Active step",
    type: ControlType.Number
  },
  position: {
    title: "Position",
    type: ControlType.Enum,
    options: ["static", "top", "bottom"],
    optionTitles: ["static", "top", "bottom"]
  },
  steps: {
    title: "Steps",
    type: ControlType.Number
  },
  variant: {
    title: "Variant",
    type: ControlType.Enum,
    options: ["text", "progress", "dots"],
    optionTitles: ["text", "progress", "dots"]
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  },
  elevation: {
    title: "Elevation",
    type: ControlType.Number
  },
  square: {
    title: "Square",
    type: ControlType.Boolean
  }
});
