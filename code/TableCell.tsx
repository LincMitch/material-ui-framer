import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerTableCell = props => {
  return <System.TableCell {...props}></System.TableCell>;
};

export const TableCell = withHOC(InnerTableCell);

TableCell.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(TableCell, {
  align: {
    title: "Align",
    type: ControlType.Enum,
    options: ["inherit", "right", "left", "center", "justify"],
    optionTitles: ["inherit", "right", "left", "center", "justify"]
  },
  padding: {
    title: "Padding",
    type: ControlType.Enum,
    options: ["none", "default", "checkbox"],
    optionTitles: ["none", "default", "checkbox"]
  },
  size: {
    title: "Size",
    type: ControlType.Enum,
    options: ["small", "medium"],
    optionTitles: ["small", "medium"]
  },
  sortDirection: {
    title: "Sort direction",
    type: ControlType.Enum,
    options: ["desc", "asc"],
    optionTitles: ["desc", "asc"]
  },
  variant: {
    title: "Variant",
    type: ControlType.Enum,
    options: ["body", "footer", "head"],
    optionTitles: ["body", "footer", "head"]
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  }
});
