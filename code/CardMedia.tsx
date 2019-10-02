import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerCardMedia = props => {
  return <System.CardMedia {...props}></System.CardMedia>;
};

export const CardMedia = withHOC(InnerCardMedia);

CardMedia.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(CardMedia, {
  classKey: {
    title: "Class key",
    type: ControlType.Enum,
    options: ["root", "media"],
    optionTitles: ["root", "media"]
  }
});
