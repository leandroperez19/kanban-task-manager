import { DefaultTheme } from "styled-components";
import colors from "../constants/Colors";

const lightTheme: DefaultTheme = {
    type: 'light',
    palette: {
        text: {
            primary: colors.black
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
        icons: colors.purple
    },
    buttons: {
        primary: {
            background: colors.purple,
            color: colors.white,
            hoverBackground: colors.lightPurple,
            hoverColor: colors.white
        },
        secondary: {
            background: colors.purple,
            color: colors.white,
            hoverBackground: colors.lightPurple,
            hoverColor: colors.white
        }
    },
    dialog: {
        background: colors.white,
        secondaryBackground: colors.lighterGray,
        highlightBackground: colors.purple,
        textPrimary: colors.mediumGray,
        textSecondary: colors.white,
        textTertiary: colors.purple,
        textDanger: colors.red
    },
}

export default lightTheme;