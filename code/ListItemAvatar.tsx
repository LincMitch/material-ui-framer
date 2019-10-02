import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerListItemAvatar = props => {
  return <System.ListItemAvatar {...props}></System.ListItemAvatar>;
};

export const ListItemAvatar = withHOC(InnerListItemAvatar);

ListItemAvatar.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ListItemAvatar, {});
