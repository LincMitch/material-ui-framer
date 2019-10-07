import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';


export function DeleteTwoToneIconx() {
  return <DeleteTwoToneIcon />
}

DeleteTwoToneIconx.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(DeleteTwoToneIcon, {
  htmlColor: {
    type: ControlType.Color,
    title: "HTML Color"
  },
});
