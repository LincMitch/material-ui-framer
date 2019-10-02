import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerToolbar = props => {
  return <System.Toolbar {...props}></System.Toolbar>;
};

export const Toolbar = withHOC(InnerToolbar);

Toolbar.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Toolbar, {
  disableGutters: {
    title: "Disable gutters",
    type: ControlType.Boolean
  },
  variant: {
    title: "Variant",
    type: ControlType.Enum,
    options: ["dense", "regular"],
    optionTitles: ["dense", "regular"]
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  }
});
