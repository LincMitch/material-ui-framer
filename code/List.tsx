import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerList = props => {
  return <System.List {...props}></System.List>;
};

export const List = withHOC(InnerList);

List.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(List, {
  classKey: {
    title: "Class key",
    type: ControlType.Enum,
    options: ["root", "padding", "subheader", "dense"],
    optionTitles: ["root", "padding", "subheader", "dense"]
  }
});
