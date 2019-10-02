import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerTextareaAutosize = props => {
  return <System.TextareaAutosize {...props}></System.TextareaAutosize>;
};

export const TextareaAutosize = withHOC(InnerTextareaAutosize);

TextareaAutosize.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(TextareaAutosize, {
  rowsMax: {
    title: "Rows max",
    type: ControlType.String
  },
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  }
});
