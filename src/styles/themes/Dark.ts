import { DefaultTheme } from "styled-components";
import colors from "../constants/Colors";

const darkTheme: DefaultTheme = {
    type: "dark",
    palette: {
        text: {
            primary: colors.white,
            secondary: colors.mediumGray,
            danger: colors.red
        },
        common: {
            white: colors.white,
            black: colors.black,
            purple: colors.purple,
        },
    },
    page: {
        background: colors.veryDarkGray,
        scrollbarThumb: colors.purple,
    },
    navbar: {
        background: colors.darkGray,
        icons: colors.purple,
        border: colors.gray,
    },
    buttons: {
        primary: {
            background: colors.purple,
            color: colors.white,
            hoverBackground: colors.lightPurple,
            hoverColor: colors.white,
        },
        secondary: {
            background: colors.white,
            color: colors.purple,
            hoverBackground: colors.lightPurple,
            hoverColor: colors.white,
        },
        danger: {
            background: colors.red,
            color: colors.white,
            hoverBackground: colors.lightPurple,
            hoverColor: colors.white,
        },
    },
    dialog: {
        background: colors.darkGray,
        secondaryBackground: colors.veryDarkGray,
        highlightBackground: colors.purple,
        textPrimary: colors.mediumGray,
        textSecondary: colors.white,
        textTertiary: colors.purple,
        textDanger: colors.red,
        hoverBackground: colors.white
    },
    toggle: {
        background: colors.purple,
        ball: colors.white,
        hoverBackground: colors.lightPurple,
    },
    modal: {
        background: colors.darkGray
    },
    input: {
        color: colors.white,
        border: colors.opaqueGray,
        label: colors.white
    },
    dropdown: {
        color: colors.white,
        border: colors.opaqueGray,
        label: colors.white,
        optionsBackground: colors.veryDarkGray,
        optionsColor: colors.mediumGray
    }
};

export default darkTheme;
