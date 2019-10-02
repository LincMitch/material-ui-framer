import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerGrid = props => {
  return <System.Grid {...props}></System.Grid>;
};

export const Grid = withHOC(InnerGrid);

Grid.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Grid, {
  classKey: {
    title: "Class key",
    type: ControlType.Enum,
    options: [
      "root",
      "container",
      "item",
      "direction-xs-column",
      "direction-xs-column-reverse",
      "direction-xs-row-reverse",
      "wrap-xs-nowrap",
      "wrap-xs-wrap-reverse",
      "align-items-xs-center",
      "align-items-xs-flex-start",
      "align-items-xs-flex-end",
      "align-items-xs-baseline",
      "align-content-xs-center",
      "align-content-xs-flex-start",
      "align-content-xs-flex-end",
      "align-content-xs-space-between",
      "align-content-xs-space-around",
      "justify-xs-center",
      "justify-xs-flex-end",
      "justify-xs-space-between",
      "justify-xs-space-around",
      "spacing-xs-1",
      "spacing-xs-2",
      "spacing-xs-3",
      "spacing-xs-4",
      "spacing-xs-5",
      "spacing-xs-6",
      "spacing-xs-7",
      "spacing-xs-8",
      "spacing-xs-9",
      "spacing-xs-10",
      "grid-xs-auto",
      "grid-xs-true",
      "grid-xs-1",
      "grid-xs-2",
      "grid-xs-3",
      "grid-xs-4",
      "grid-xs-5",
      "grid-xs-6",
      "grid-xs-7",
      "grid-xs-8",
      "grid-xs-9",
      "grid-xs-10",
      "grid-xs-11",
      "grid-xs-12"
    ],
    optionTitles: [
      "root",
      "container",
      "item",
      "direction xs column",
      "direction xs column reverse",
      "direction xs row reverse",
      "wrap xs nowrap",
      "wrap xs wrap reverse",
      "align items xs center",
      "align items xs flex start",
      "align items xs flex end",
      "align items xs baseline",
      "align content xs center",
      "align content xs flex start",
      "align content xs flex end",
      "align content xs space between",
      "align content xs space around",
      "justify xs center",
      "justify xs flex end",
      "justify xs space between",
      "justify xs space around",
      "spacing xs 1",
      "spacing xs 2",
      "spacing xs 3",
      "spacing xs 4",
      "spacing xs 5",
      "spacing xs 6",
      "spacing xs 7",
      "spacing xs 8",
      "spacing xs 9",
      "spacing xs 10",
      "grid xs auto",
      "grid xs true",
      "grid xs 1",
      "grid xs 2",
      "grid xs 3",
      "grid xs 4",
      "grid xs 5",
      "grid xs 6",
      "grid xs 7",
      "grid xs 8",
      "grid xs 9",
      "grid xs 10",
      "grid xs 11",
      "grid xs 12"
    ]
  }
});
