import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerAvatar = props => {
  return <System.Avatar {...props}></System.Avatar>;
};

export const Avatar = withHOC(InnerAvatar);

Avatar.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Avatar, {
  classKey: {
    title: "Class key",
    type: ControlType.Enum,
    options: ["root", "colorDefault", "img"],
    optionTitles: ["root", "color Default", "img"]
  }
});
