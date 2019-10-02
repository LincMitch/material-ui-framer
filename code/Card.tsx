import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerCard = props => {
  return <System.Card {...props}></System.Card>;
};

export const Card = withHOC(InnerCard);

Card.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Card, {
  raised: {
    title: "Raised",
    type: ControlType.Boolean
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
