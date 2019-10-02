import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerStepper = props => {
  return <System.Stepper {...props}></System.Stepper>;
};

export const Stepper = withHOC(InnerStepper);

Stepper.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Stepper, {
  activeStep: {
    title: "Active step",
    type: ControlType.Number
  },
  alternativeLabel: {
    title: "Alternative label",
    type: ControlType.Boolean
  },
  children: {
    title: "Children",
    type: ControlType.String
  },
  connector: {
    title: "Connector",
    type: ControlType.String
  },
  nonLinear: {
    title: "Non linear",
    type: ControlType.Boolean
  },
  orientation: {
    title: "Orientation",
    type: ControlType.Enum,
    options: ["horizontal", "vertical"],
    optionTitles: ["horizontal", "vertical"]
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
