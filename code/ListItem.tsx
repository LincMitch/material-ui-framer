import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerListItem = props => {
  return <System.ListItem {...props}></System.ListItem>;
};

export const ListItem = withHOC(InnerListItem);

ListItem.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ListItem, {});
