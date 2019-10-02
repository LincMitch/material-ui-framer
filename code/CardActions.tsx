import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerCardActions = props => {
  return <System.CardActions {...props}></System.CardActions>;
};

export const CardActions = withHOC(InnerCardActions);

CardActions.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(CardActions, {
  disableSpacing: {
    title: "Disable spacing",
    type: ControlType.Boolean
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  }
});
