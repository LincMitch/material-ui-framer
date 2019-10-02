import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerExpansionPanelActions = props => {
  return (
    <System.ExpansionPanelActions {...props}></System.ExpansionPanelActions>
  );
};

export const ExpansionPanelActions = withHOC(InnerExpansionPanelActions);

ExpansionPanelActions.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ExpansionPanelActions, {
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  }
});
