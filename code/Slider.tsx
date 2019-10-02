import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerSlider = props => {
  return <System.Slider {...props}></System.Slider>;
};

export const Slider = withHOC(InnerSlider);

Slider.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Slider, {
  color: {
    title: "Color",
    type: ControlType.Enum,
    options: ["primary", "secondary"],
    optionTitles: ["primary", "secondary"]
  },
  defaultValue: {
    title: "Default value",
    type: ControlType.Number
  },
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean
  },
  max: {
    title: "Max",
    type: ControlType.Number
  },
  min: {
    title: "Min",
    type: ControlType.Number
  },
  name: {
    title: "Name",
    type: ControlType.String
  },
  orientation: {
    title: "Orientation",
    type: ControlType.Enum,
    options: ["horizontal", "vertical"],
    optionTitles: ["horizontal", "vertical"]
  },
  step: {
    title: "Step",
    type: ControlType.Number
  },
  value: {
    title: "Value",
    type: ControlType.Number
  },
  valueLabelDisplay: {
    title: "Value label display",
    type: ControlType.Enum,
    options: ["on", "off", "auto"],
    optionTitles: ["on", "off", "auto"]
  },
  valueLabelFormat: {
    title: "Value label format",
    type: ControlType.String,
    defaultValue: "valueLabelFormat"
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  }
});
