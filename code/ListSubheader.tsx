import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerListSubheader = props => {
  return <System.ListSubheader {...props}></System.ListSubheader>;
};

export const ListSubheader = withHOC(InnerListSubheader);

ListSubheader.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ListSubheader, {
  color: {
    title: "Color",
    type: ControlType.Enum,
    options: ["inherit", "primary", "default"],
    optionTitles: ["inherit", "primary", "default"]
  },
  disableGutters: {
    title: "Disable gutters",
    type: ControlType.Boolean
  },
  disableSticky: {
    title: "Disable sticky",
    type: ControlType.Boolean
  },
  inset: {
    title: "Inset",
    type: ControlType.Boolean
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  }
});
