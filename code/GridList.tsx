import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerGridList = props => {
  return <System.GridList {...props}></System.GridList>;
};

export const GridList = withHOC(InnerGridList);

GridList.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(GridList, {
  cellHeight: {
    title: "Cell height",
    type: ControlType.Enum,
    options: ["auto"],
    optionTitles: ["auto"]
  },
  cols: {
    title: "Cols",
    type: ControlType.Number
  },
  spacing: {
    title: "Spacing",
    type: ControlType.Number
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  }
});
