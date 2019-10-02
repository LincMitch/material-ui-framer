import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerButtonGroup = props => {
  return <System.ButtonGroup {...props}></System.ButtonGroup>;
};

export const ButtonGroup = withHOC(InnerButtonGroup);

ButtonGroup.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ButtonGroup, {
  classKey: {
    title: "Class key",
    type: ControlType.Enum,
    options: [
      "root",
      "contained",
      "fullWidth",
      "grouped",
      "groupedOutlined",
      "groupedOutlinedPrimary",
      "groupedOutlinedSecondary",
      "groupedContained",
      "groupedContainedPrimary",
      "groupedContainedSecondary"
    ],
    optionTitles: [
      "root",
      "contained",
      "full Width",
      "grouped",
      "grouped Outlined",
      "grouped Outlined Primary",
      "grouped Outlined Secondary",
      "grouped Contained",
      "grouped Contained Primary",
      "grouped Contained Secondary"
    ]
  }
});
