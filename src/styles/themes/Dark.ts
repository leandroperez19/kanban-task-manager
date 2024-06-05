import { DefaultTheme } from "styled-components";
import colors from "../constants/Colors";

const darkTheme: DefaultTheme = {
    type: "dark",
    palette: {
        text: {
            primary: colors.white,
        },
        common: {
            white: colors.white,
            black: colors.black,
            purple: colors.purple
        }
    },
    page: {
        background: colors.veryDarkGray,
        scrollbarThumb: colors.purple,
    },
    navbar: {
        background: colors.darkGray,
        icons: colors.purple,
        border: colors.gray
    },
    buttons: {
        primary: {
            background: colors.purple,
            color: colors.white,
            hoverBackground: colors.lightPurple,
            hoverColor: colors.white,
        },
        secondary: {
            background: colors.purple,
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
        textDanger: colors.red
    },
};

export default darkTheme;
