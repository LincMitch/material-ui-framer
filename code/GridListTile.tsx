import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerGridListTile = props => {
  return <System.GridListTile {...props}></System.GridListTile>;
};

export const GridListTile = withHOC(InnerGridListTile);

GridListTile.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(GridListTile, {
  cols: {
    title: "Cols",
    type: ControlType.Number
  },
  rows: {
    title: "Rows",
    type: ControlType.Number
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  }
});
