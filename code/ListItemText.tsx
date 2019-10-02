import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerListItemText = props => {
  return <System.ListItemText {...props}></System.ListItemText>;
};

export const ListItemText = withHOC(InnerListItemText);

ListItemText.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ListItemText, {
  disableTypography: {
    title: "Disable typography",
    type: ControlType.Boolean
  },
  inset: {
    title: "Inset",
    type: ControlType.Boolean
  },
  primary: {
    title: "Primary",
    type: ControlType.String
  },
  secondary: {
    title: "Secondary",
    type: ControlType.String
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  }
});
