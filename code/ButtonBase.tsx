import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerButtonBase = props => {
  return <System.ButtonBase {...props}></System.ButtonBase>;
};

export const ButtonBase = withHOC(InnerButtonBase);

ButtonBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ButtonBase, {
  classKey: {
    title: "Class key",
    type: ControlType.Enum,
    options: ["root", "disabled", "focusVisible"],
    optionTitles: ["root", "disabled", "focus Visible"]
  }
});
