import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerCardActionArea = props => {
  return <System.CardActionArea {...props}></System.CardActionArea>;
};

export const CardActionArea = withHOC(InnerCardActionArea);

CardActionArea.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(CardActionArea, {
  classKey: {
    title: "Class key",
    type: ControlType.Array
  }
});
