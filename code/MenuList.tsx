import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerMenuList = props => {
  return <System.MenuList {...props}></System.MenuList>;
};

export const MenuList = withHOC(InnerMenuList);

MenuList.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(MenuList, {
  autoFocus: {
    title: "Auto focus",
    type: ControlType.Boolean
  },
  disableListWrap: {
    title: "Disable list wrap",
    type: ControlType.Boolean
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  },
  dense: {
    title: "Dense",
    type: ControlType.Boolean
  },
  disablePadding: {
    title: "Disable padding",
    type: ControlType.Boolean
  }
});
