import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerContainer = props => {
  return <System.Container {...props}></System.Container>;
};

export const Container = withHOC(InnerContainer);

Container.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Container, {
  fixed: {
    title: "Fixed",
    type: ControlType.Boolean
  },
  maxWidth: {
    title: "Max width",
    type: ControlType.Enum,
    options: ["xs", "sm", "md", "lg", "xl"],
    optionTitles: ["xs", "sm", "md", "lg", "xl"]
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  }
});
