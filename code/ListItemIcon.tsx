import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerListItemIcon = props => {
  return <System.ListItemIcon {...props}></System.ListItemIcon>;
};

export const ListItemIcon = withHOC(InnerListItemIcon);

ListItemIcon.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ListItemIcon, {
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  }
});
