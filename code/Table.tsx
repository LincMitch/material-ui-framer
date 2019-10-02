import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerTable = props => {
  return <System.Table {...props}></System.Table>;
};

export const Table = withHOC(InnerTable);

Table.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Table, {
  padding: {
    title: "Padding",
    type: ControlType.Enum,
    options: ["none", "default", "checkbox"],
    optionTitles: ["none", "default", "checkbox"]
  },
  size: {
    title: "Size",
    type: ControlType.Enum,
    options: ["small", "medium"],
    optionTitles: ["small", "medium"]
  },
  stickyHeader: {
    title: "Sticky header",
    type: ControlType.Boolean
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  }
});
