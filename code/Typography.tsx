import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerTypography = props => {
  return <System.Typography {...props}>{props.text}</System.Typography>;
};

export const Typography = withHOC(InnerTypography);

Typography.defaultProps = {
  width: 150,
  height: 50,
  text: 'text'
};

addPropertyControls(Typography, {
  align: {
    title: "Align",
    type: ControlType.Enum,
    options: ["inherit", "right", "left", "center", "justify"],
    optionTitles: ["inherit", "right", "left", "center", "justify"]
  },
  color: {
    title: "Color",
    type: ControlType.Enum,
    options: [
      "inherit",
      "primary",
      "secondary",
      "error",
      "initial",
      "textPrimary",
      "textSecondary"
    ],
    optionTitles: [
      "inherit",
      "primary",
      "secondary",
      "error",
      "initial",
      "text Primary",
      "text Secondary"
    ]
  },
  display: {
    title: "Display",
    type: ControlType.Enum,
    options: ["inline", "initial", "block"],
    optionTitles: ["inline", "initial", "block"]
  },
  gutterBottom: {
    title: "Gutter bottom",
    type: ControlType.Boolean
  },
  noWrap: {
    title: "No wrap",
    type: ControlType.Boolean
  },
  paragraph: {
    title: "Paragraph",
    type: ControlType.Boolean
  },
  variant: {
    title: "Variant",
    type: ControlType.Enum,
    options: [
      "inherit",
      "button",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "subtitle1",
      "subtitle2",
      "body1",
      "body2",
      "caption",
      "overline",
      "srOnly"
    ],
    optionTitles: [
      "inherit",
      "button",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "subtitle1",
      "subtitle2",
      "body1",
      "body2",
      "caption",
      "overline",
      "sr Only"
    ]
  },
  text: {
    title: "Text",
    type: ControlType.String,
    defaultValue: "Text"
  }
});
