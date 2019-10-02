import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerListItemSecondaryAction = props => {
  return (
    <System.ListItemSecondaryAction {...props}></System.ListItemSecondaryAction>
  );
};

export const ListItemSecondaryAction = withHOC(InnerListItemSecondaryAction);

ListItemSecondaryAction.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ListItemSecondaryAction, {
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  }
});
