import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import { cloneFrameless } from "./tools/framerx-utils";

type Props = {
  externalTabs: React.ReactNode;
};


const InnerButtonGroup = props => {
  const { externalTabs, ...rest } = props;

  let tabElements;
  tabElements = cloneFrameless(externalTabs);

  return (
    <System.ButtonGroup {...props}>
      {tabElements}
    </System.ButtonGroup>
  );
};


export const ButtonGroup = withHOC(InnerButtonGroup);

ButtonGroup.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ButtonGroup, {
  externalTabs: {
    type: ControlType.ComponentInstance,
    title: "Buttons"
  },

  children: {
    title: "Children",
    type: ControlType.ComponentInstance,
  },
  //whats this?
//   classKey: {
//     title: "Class key",
//     type: ControlType.Enum,
//   options: [
//     "root",
//     "contained",
//     "fullWidth",
//     "grouped",
//     "groupedText",
//     "groupedTextPrimary",
//     "groupedTextSecondary",
//     "groupedOutlined",
//     "groupedOutlinedPrimary",
//     "groupedOutlinedSecondary",
//     "groupedContained",
//     "groupedContainedPrimary",
//     "groupedContainedSecondary",
//     "disabled",
//   ],
//   optionTitles: [
//     "Root",
//     "Contained",
//     "FullWidth",
//     "Grouped",
//     "Grouped Text",
//     "Grouped Text Primary",
//     "Grouped Text Secondary",
//     "Grouped utlined",
//     "Grouped OutlinedPrimary",
//     "Grouped OutlinedSecondary",
//     "Grouped ontained",
//     "Grouped Contained Primary",
//     "Grouped Contained Secondary",
//     "Disabled",
//   ],
color: {
  title: "Color",
  type: ControlType.Enum,
  options: [
    "default",
    "inherit",
    "primary",
    "secondary",
  ],
  optionTitles: [
    "Default",
    "Inherit",
    "Primary",
    "Secondary",
  ]
},
//component?
disabled: {
  title: "Disabled",
  type: ControlType.Boolean
},
disableFocusRipple: {
  title: "Disable focus ripple",
  type: ControlType.Boolean
},
disableRipple: {
  title: "Disable ripple",
  type: ControlType.Boolean
},
fullWidth: {
  title: "Full width",
  type: ControlType.Boolean
},
size: {
  title: "Size",
  type: ControlType.Enum,
  options: [
    "small",
    "medium",
    "large",
  ],
  optionTitles: [
    "Small",
    "Medium",
    "Large",
  ]
},
variant: {
  title: "Variant",
  type: ControlType.Enum,
  options: [
    "text",
    "outlined",
    "contained",
  ],
  optionTitles: [
    "Text",
    "Outlined",
    "Contained",
  ]
},
});
