import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerChip = props => {
  return <System.Chip {...props}></System.Chip>;
};

export const Chip = withHOC(InnerChip);

Chip.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Chip, {
  classKey: {
    title: "Class key",
    type: ControlType.Enum,
    options: [
      "root",
      "colorPrimary",
      "colorSecondary",
      "avatar",
      "icon",
      "label",
      "sizeSmall",
      "clickable",
      "clickableColorPrimary",
      "clickableColorSecondary",
      "deletable",
      "deletableColorPrimary",
      "deletableColorSecondary",
      "outlined",
      "outlinedPrimary",
      "outlinedSecondary",
      "avatarSmall",
      "avatarColorPrimary",
      "avatarColorSecondary",
      "avatarChildren",
      "iconSmall",
      "iconColorPrimary",
      "iconColorSecondary",
      "labelSmall",
      "deleteIcon",
      "deleteIconSmall",
      "deleteIconColorPrimary",
      "deleteIconColorSecondary",
      "deleteIconOutlinedColorPrimary",
      "deleteIconOutlinedColorSecondary"
    ],
    optionTitles: [
      "root",
      "color Primary",
      "color Secondary",
      "avatar",
      "icon",
      "label",
      "size Small",
      "clickable",
      "clickable Color Primary",
      "clickable Color Secondary",
      "deletable",
      "deletable Color Primary",
      "deletable Color Secondary",
      "outlined",
      "outlined Primary",
      "outlined Secondary",
      "avatar Small",
      "avatar Color Primary",
      "avatar Color Secondary",
      "avatar Children",
      "icon Small",
      "icon Color Primary",
      "icon Color Secondary",
      "label Small",
      "delete Icon",
      "delete Icon Small",
      "delete Icon Color Primary",
      "delete Icon Color Secondary",
      "delete Icon Outlined Color Primary",
      "delete Icon Outlined Color Secondary"
    ]
  }
});
