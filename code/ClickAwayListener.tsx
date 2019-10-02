import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerClickAwayListener = props => {
  return <System.ClickAwayListener {...props}></System.ClickAwayListener>;
};

export const ClickAwayListener = withHOC(InnerClickAwayListener);

ClickAwayListener.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ClickAwayListener, {
  children: {
    title: "Children",
    type: ControlType.String
  },
  mouseEvent: {
    title: "Mouse event",
    type: ControlType.Enum,
    options: ["onClick", "onMouseDown", "onMouseUp"],
    optionTitles: ["on Click", "on Mouse Down", "on Mouse Up"]
  },
  touchEvent: {
    title: "Touch event",
    type: ControlType.Enum,
    options: ["onTouchEnd", "onTouchStart"],
    optionTitles: ["on Touch End", "on Touch Start"]
  }
});
