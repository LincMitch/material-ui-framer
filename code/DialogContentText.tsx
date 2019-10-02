import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerDialogContentText = props => {
  return <System.DialogContentText {...props}></System.DialogContentText>;
};

export const DialogContentText = withHOC(InnerDialogContentText);

DialogContentText.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(DialogContentText, {
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
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
  noWrap: {
    title: "No wrap",
    type: ControlType.Boolean
  },
  gutterBottom: {
    title: "Gutter bottom",
    type: ControlType.Boolean
  },
  paragraph: {
    title: "Paragraph",
    type: ControlType.Boolean
  },
  align: {
    title: "Align",
    type: ControlType.Enum,
    options: ["inherit", "right", "left", "center", "justify"],
    optionTitles: ["inherit", "right", "left", "center", "justify"]
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
  }
});
