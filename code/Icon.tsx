import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import * as allIcons from "@material-ui/icons"

// Add withHOC?  
// import { withHOC } from "./withHOC";
// If so, how do I do this? 
// export const Icon = withHOC(InnerIcon);

export function Icon({iconName, ...props}) {
    const MaterialIcon = allIcons[iconName];
    return (
        <MaterialIcon 
            color={props.color} 
            fontSize={props.fontSize}
        />
    )
}

Icon.defaultProps = {
    iconName: "DeleteTwoTone",
    color: "primary",
}

addPropertyControls(Icon, {
    iconName: {
        type: ControlType.String,
        defaultValue: "DeleteTwoTone",
        title: "Icon Name",
    },
    // children: {
    //   title: "Children",
    //   type: ControlType.ComponentInstance,
    // },
    //whats this?
//   classKey: {
//     title: "Class key",
//     type: ControlType.Enum,
//   options: [
//     "root",
//     "colorPrimary",
//     "colorSecondary",
//     "colorAction",
//     "colorError",
//     "colorDisabled",
//     "fontSizeInherit",
//     "fontSizeSmall",
//     "fontSizeLarge",
//   ],
//   optionTitles: [
//     "Root",
//     "Color Primary",
//     "Color Secondary",
//     "Color Action",
//     "Color Error",
//     "Color Disabled",
//     "Font Size Inherit",
//     "Font Size Small",
//     "Font Size Large",
//   ],
    color: {
        title: "Color",
        type: ControlType.Enum,
        options: [
            "inherit",
            "primary",
            "secondary",
            "action",
            "error",
            "disabled",
        ],
        optionTitles: [
            "Inherit",
            "Primary",
            "Secondary",
            "Action",
            "Error",
            "Disabled",
        ]
    },
    //component?
    fontSize: {
        title: "Font Size",
        type: ControlType.Enum,
        options: [
            "inherit",
            "default",
            "small",
            "large",
        ],
        optionTitles: [
            "Inherit",
            "Default",
            "Small",
            "Large",
        ]
    },
})
