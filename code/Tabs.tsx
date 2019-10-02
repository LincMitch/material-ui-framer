import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerTabs = props => {
  return <System.Tabs {...props}></System.Tabs>;
};

export const Tabs = withHOC(InnerTabs);

Tabs.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Tabs, {
  classKey: {
    title: "Class key",
    type: ControlType.Enum,
    options: [
      "root",
      "fixed",
      "flexContainer",
      "scroller",
      "scrollable",
      "centered",
      "scrollButtons",
      "scrollButtonsDesktop",
      "indicator"
    ],
    optionTitles: [
      "root",
      "fixed",
      "flex Container",
      "scroller",
      "scrollable",
      "centered",
      "scroll Buttons",
      "scroll Buttons Desktop",
      "indicator"
    ]
  }
});
