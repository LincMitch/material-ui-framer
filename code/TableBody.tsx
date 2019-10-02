import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerTableBody = props => {
  return <System.TableBody {...props}></System.TableBody>;
};

export const TableBody = withHOC(InnerTableBody);

TableBody.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(TableBody, {
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  }
});
