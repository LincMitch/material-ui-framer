import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerTableSortLabel = props => {
  return <System.TableSortLabel {...props}></System.TableSortLabel>;
};

export const TableSortLabel = withHOC(InnerTableSortLabel);

TableSortLabel.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(TableSortLabel, {
  classKey: {
    title: "Class key",
    type: ControlType.Array
  }
});
