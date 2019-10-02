import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerCardHeader = props => {
  return <System.CardHeader {...props}></System.CardHeader>;
};

export const CardHeader = withHOC(InnerCardHeader);

CardHeader.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(CardHeader, {
  action: {
    title: "Action",
    type: ControlType.String
  },
  avatar: {
    title: "Avatar",
    type: ControlType.String
  },
  disableTypography: {
    title: "Disable typography",
    type: ControlType.Boolean
  },
  subheader: {
    title: "Subheader",
    type: ControlType.String
  },
  title: {
    title: "Title",
    type: ControlType.String,
    defaultValue: "title"
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  }
});
