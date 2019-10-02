import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerTablePagination = props => {
  return <System.TablePagination {...props}></System.TablePagination>;
};

export const TablePagination = withHOC(InnerTablePagination);

TablePagination.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(TablePagination, {
  classKey: {
    title: "Class key",
    type: ControlType.Enum,
    options: [
      "root",
      "caption",
      "input",
      "select",
      "toolbar",
      "spacer",
      "menuItem",
      "selectRoot",
      "selectIcon",
      "actions"
    ],
    optionTitles: [
      "root",
      "caption",
      "input",
      "select",
      "toolbar",
      "spacer",
      "menu Item",
      "select Root",
      "select Icon",
      "actions"
    ]
  }
});
