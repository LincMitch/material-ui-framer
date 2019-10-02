import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerTableHead = props => {
  return <System.TableHead {...props}></System.TableHead>;
};

export const TableHead = withHOC(InnerTableHead);

TableHead.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(TableHead, {
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  }
});
