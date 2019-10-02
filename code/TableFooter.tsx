import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerTableFooter = props => {
  return <System.TableFooter {...props}></System.TableFooter>;
};

export const TableFooter = withHOC(InnerTableFooter);

TableFooter.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(TableFooter, {
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  }
});
