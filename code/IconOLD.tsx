import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import * as allIcons from '@material-ui/icons'

const InnerIcon = props => {
  const { allIcons, ...rest } = props;
  return {allIcons}
};

export const Icon = withHOC(InnerIcon);

Icon.defaultProps = {
  width: 150,
  height: 50,
  Name : "DeleteTwoTone"
};

addPropertyControls(Icon, {
  placeholder: {
    title: "Name",
    type: ControlType.String,
    defaultValue: "DeleteTwoTone"
  }
  // children: {
  //   title: "Children",
  //   type: ControlType.ComponentInstance,
  // },
//   classKey: {
//     title: "Class key",
//     type: ControlType.Enum,
//   options: [
//     "root",
//     "colorPrimary",
//     "colorSecondary",
//     "colorAction",
//     "colorError",
//     "colorDisabled",
//     "fontSizeInherit",
//     "fontSizeSmall",
//     "fontSizeLarge",
//   ],
//   optionTitles: [
//     "root",
//     "Color Primary",
//     "Color Secondary",
//     "Color Action",
//     "Color Error",
//     "Color Disabled",
//     "Font Size Inherit",
//     "Font Size Small",
//     "Font Size Large",
//   ],
// },
  // classes??
  //   color: {
  //   title: "Color",
  //   type: ControlType.Enum,
  //   options: [
  //     "inherit",
  //     "primary",
  //     "secondary",
  //     "default",
  //     "error",
  //     "disabled",
  //   ],
  //   optionTitles: [
  //     "inherit",
  //     "primary",
  //     "secondary",
  //     "default",
  //     "error",
  //     "disabled",
  //   ]
  // },
  // fontSize: {
  //   title: "Font size",
  //   type: ControlType.Enum,
  //   options: ["inherit", "default", "small", "large"],
  //   optionTitles: ["inherit", "default", "small", "large"]
  // },
  // placeholder: {
  //   title: "Placeholder",
  //   type: ControlType.String,
  //   defaultValue: "placeholder"
  // }
});
