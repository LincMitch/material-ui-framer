import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerRadioGroup = props => {
  return <System.RadioGroup {...props}></System.RadioGroup>;
};

export const RadioGroup = withHOC(InnerRadioGroup);

RadioGroup.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(RadioGroup, {
  name: {
    title: "Name",
    type: ControlType.String
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  },
  row: {
    title: "Row",
    type: ControlType.Boolean
  }
});
