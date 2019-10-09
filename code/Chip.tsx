import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import { cloneFrameless } from "./tools/framerx-utils";

type Props = {
  externalIcon: React.ReactNode;
};


const InnerChip = props => {
  const { externalIcon, ...rest } = props;
  let iconElement;
  iconElement = cloneFrameless(externalIcon);

  return <System.Chip {...props}
  icon={iconElement}
  ></System.Chip>;
};

export const Chip = withHOC(InnerChip);

Chip.defaultProps = {
  width: 150,
  height: 50,
  label: "Chip"
};

addPropertyControls(Chip, {
  avatar: {
    title: "Avatar",
    type: ControlType.ComponentInstance
  },
  children: {
    title: "Children",
    type: ControlType.ComponentInstance
  },
  // Do I need this?
  // classKey: {
  //   title: "Class key",
  //   type: ControlType.Enum,
  //   options: [
  //     "root",
  //     "sizeSmall",
  //     "colorPrimary",
  //     "colorSecondary",
  //     "disabled",
  //     "clickable",
  //     "clickableColorPrimary",
  //     "clickableColorSecondary",
  //     "deletable",
  //     "deletableColorPrimary",
  //     "deletableColorSecondary",
  //     "outlined",
  //     "outlinedPrimary",
  //     "outlinedSecondary",
  //     "avatar",
  //     "avatarSmall",
  //     "avatarColorPrimary",
  //     "avatarColorSecondary",
  //     "icon",
  //     "iconSmall",
  //     "iconColorPrimary",
  //     "iconColorSecondary",
  //     "label",
  //     "labelSmall",
  //     "deleteIcon",
  //     "deleteIconSmall",
  //     "deleteIconColorPrimary",
  //     "deleteIconColorSecondary",
  //     "deleteIconOutlinedColorPrimary",
  //     "deleteIconOutlinedColorSecondary",
  //   ],
  //   optionTitles: [
  //     "Root",
  //     "Size Small",
  //     "Color Primary",
  //     "Color Secondary",
  //     "Disabled",
  //     "Clickable",
  //     "Clickable Color Primary",
  //     "Clickable Color Secondary",
  //     "Deletable",
  //     "Deletable Color Primary",
  //     "Deletable Color Secondary",
  //     "Outlined",
  //     "Outlined Primary",
  //     "Outlined Secondary",
  //     "Avatar ",
  //     "Avatar Small",
  //     "Avatar Color Primary",
  //     "Avatar Color Secondary",
  //     "Icon",
  //     "Icon Small",
  //     "Icon Color Primary",
  //     "Icon Color Secondary",
  //     "Label",
  //     "Label Small",
  //     "Delete Icon ",
  //     "Delete Icon Small",
  //     "Delete Icon Color Primary",
  //     "Delete Icon Color Secondary",
  //     "Delete Icon Outlined Color Primary",
  //     "Delete Icon Outlined Color Secondary",
  //   ]
  // },
  clickable: {
    title: "Clickable",
    type: ControlType.Boolean
  },
  color: {
    title: "Color",
    type: ControlType.Enum,
    options: [
      "default",
      "primary",
      "secondary",
    ],
    optionTitles: [
      "Default",
      "Primary",
      "Secondary",
    ]
  },
  // Not sure what this is. Docs say "elementType"
  // component: {
  //   title: "Component",
  //   type: ControlType.ComponentInstance,
  // },
  deleteIcon: {
    title: "Delete Icon",
    type: ControlType.ComponentInstance,
  },
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean
  },
  externalIcon: {
    title: "Icon",
    type: ControlType.ComponentInstance,
  },
  // Type node?
  label: {
    title: "Label",
    type: ControlType.String
  },
  // Type func. How?
  // onDelete: {
  //   title: "On Delete",
  //   type: ControlType.Boolean
  // },
  size: {
    title: "Size",
    type: ControlType.Enum,
    options: [
      "small",
      "medium",
    ],
    optionTitles: [
      "Small",
      "Medium",
    ]
  },
  variant: {
    title: "Variant",
    type: ControlType.Enum,
    options: [
      "default",
      "outlined",
    ],
    optionTitles: [
      "Default",
      "Outlined",
    ]
  }, 
});