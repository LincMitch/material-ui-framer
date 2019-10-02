import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerFormLabel = props => {
  return <System.FormLabel {...props}></System.FormLabel>;
};

export const FormLabel = withHOC(InnerFormLabel);

FormLabel.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(FormLabel, {
  classKey: {
    title: "Class key",
    type: ControlType.Enum,
    options: [
      "root",
      "error",
      "disabled",
      "required",
      "focused",
      "filled",
      "asterisk"
    ],
    optionTitles: [
      "root",
      "error",
      "disabled",
      "required",
      "focused",
      "filled",
      "asterisk"
    ]
  }
});
