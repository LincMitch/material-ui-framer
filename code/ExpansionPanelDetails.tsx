import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerExpansionPanelDetails = props => {
  return (
    <System.ExpansionPanelDetails {...props}></System.ExpansionPanelDetails>
  );
};

export const ExpansionPanelDetails = withHOC(InnerExpansionPanelDetails);

ExpansionPanelDetails.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ExpansionPanelDetails, {
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  }
});
