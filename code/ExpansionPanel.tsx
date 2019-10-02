import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerExpansionPanel = props => {
  return <System.ExpansionPanel {...props}></System.ExpansionPanel>;
};

export const ExpansionPanel = withHOC(InnerExpansionPanel);

ExpansionPanel.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ExpansionPanel, {
  defaultExpanded: {
    title: "Default expanded",
    type: ControlType.Boolean
  },
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean
  },
  expanded: {
    title: "Expanded",
    type: ControlType.Boolean
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  },
  elevation: {
    title: "Elevation",
    type: ControlType.Number
  },
  square: {
    title: "Square",
    type: ControlType.Boolean
  }
});
