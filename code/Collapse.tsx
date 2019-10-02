import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerCollapse = props => {
  return <System.Collapse {...props}></System.Collapse>;
};

export const Collapse = withHOC(InnerCollapse);

Collapse.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Collapse, {
  children: {
    title: "Children",
    type: ControlType.String
  },
  collapsedHeight: {
    title: "Collapsed height",
    type: ControlType.String
  },
  timeout: {
    title: "Timeout",
    type: ControlType.Enum,
    options: ["auto"],
    optionTitles: ["auto"]
  }
});
