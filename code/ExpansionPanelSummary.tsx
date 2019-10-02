import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerExpansionPanelSummary = props => {
  return (
    <System.ExpansionPanelSummary {...props}></System.ExpansionPanelSummary>
  );
};

export const ExpansionPanelSummary = withHOC(InnerExpansionPanelSummary);

ExpansionPanelSummary.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ExpansionPanelSummary, {
  classKey: {
    title: "Class key",
    type: ControlType.Array
  }
});
