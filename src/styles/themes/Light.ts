import { DefaultTheme } from "styled-components";
import colors from "../constants/Colors";

const lightTheme: DefaultTheme = {
    type: 'light',
    palette: {
        text: {
            primary: colors.black,
            secondary: colors.mediumGray,
            danger: colors.red
        },
        common: {
            white: colors.white,
            black: colors.black,
            purple: colors.purple
        },
    },
    page: {
        background: colors.lighterGray,
        scrollbarThumb: colors.purple
    },
    navbar: {
        background: colors.white,
        icons: colors.purple,
        border: colors.lightGray
    },
    buttons: {
        primary: {
            background: colors.purple,
            color: colors.white,
            hoverBackground: colors.lightPurple,
            hoverColor: colors.white
        },
        secondary: {
            background: colors.opaquePurple,
            color: colors.purple,
            hoverBackground: colors.lightPurple,
            hoverColor: colors.white
        },
        danger: {
            background: colors.red,
            color: colors.white,
            hoverBackground: colors.lightPurple,
            hoverColor: colors.white,
        },
    },
    dialog: {
        background: colors.white,
        secondaryBackground: colors.lighterGray,
        highlightBackground: colors.purple,
        textPrimary: colors.mediumGray,
        textSecondary: colors.white,
        textTertiary: colors.purple,
        textDanger: colors.red,
        hoverBackground: colors.opaquePurple
    },
    toggle: {
        background: colors.purple,
        ball: colors.white,
        hoverBackground: colors.lightPurple,
    },
    modal: {
        background: colors.white
    },
    input: {
        color: colors.black,
        border: colors.opaqueGray,
        label: colors.mediumGray
    },
    dropdown: {
        color: colors.black,
        border: colors.opaqueGray,
        label: colors.mediumGray,
        optionsBackground: colors.gray,
        optionsColor: colors.mediumGray
    }
}

export default lightTheme;