import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerCardContent = props => {
  return <System.CardContent {...props}></System.CardContent>;
};

export const CardContent = withHOC(InnerCardContent);

CardContent.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(CardContent, {
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  }
});
