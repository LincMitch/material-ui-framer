import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerBreadcrumbs = props => {
  return <System.Breadcrumbs {...props}></System.Breadcrumbs>;
};

export const Breadcrumbs = withHOC(InnerBreadcrumbs);

Breadcrumbs.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Breadcrumbs, {
  classKey: {
    title: "Class key",
    type: ControlType.Enum,
    options: ["root", "ol", "li", "separator"],
    optionTitles: ["root", "ol", "li", "separator"]
  }
});
