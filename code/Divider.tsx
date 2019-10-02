import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerDivider = props => {
  return <System.Divider {...props}></System.Divider>;
};

export const Divider = withHOC(InnerDivider);

Divider.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Divider, {
  classKey: {
    title: "Class key",
    type: ControlType.Enum,
    options: ["root", "vertical", "absolute", "inset", "light", "middle"],
    optionTitles: ["root", "vertical", "absolute", "inset", "light", "middle"]
  }
});
