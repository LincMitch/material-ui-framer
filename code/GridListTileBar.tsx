import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerGridListTileBar = props => {
  return <System.GridListTileBar {...props}></System.GridListTileBar>;
};

export const GridListTileBar = withHOC(InnerGridListTileBar);

GridListTileBar.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(GridListTileBar, {
  actionIcon: {
    title: "Action icon",
    type: ControlType.String
  },
  actionPosition: {
    title: "Action position",
    type: ControlType.Enum,
    options: ["right", "left"],
    optionTitles: ["right", "left"]
  },
  subtitle: {
    title: "Subtitle",
    type: ControlType.String,
    defaultValue: "subtitle"
  },
  title: {
    title: "Title",
    type: ControlType.String,
    defaultValue: "title"
  },
  titlePosition: {
    title: "Title position",
    type: ControlType.Enum,
    options: ["top", "bottom"],
    optionTitles: ["top", "bottom"]
  }
});
