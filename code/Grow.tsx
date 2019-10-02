import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerGrow = props => {
  return <System.Grow {...props}></System.Grow>;
};

export const Grow = withHOC(InnerGrow);

Grow.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Grow, {
  timeout: {
    title: "Timeout",
    type: ControlType.Enum,
    options: ["auto"],
    optionTitles: ["auto"]
  }
});
