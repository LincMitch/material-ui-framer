import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerTableRow = props => {
  return <System.TableRow {...props}></System.TableRow>;
};

export const TableRow = withHOC(InnerTableRow);

TableRow.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(TableRow, {
  hover: {
    title: "Hover",
    type: ControlType.Boolean
  },
  selected: {
    title: "Selected",
    type: ControlType.Boolean
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  }
});
