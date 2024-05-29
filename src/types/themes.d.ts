import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    type: 'light' | 'dark'
    palette: {
      text: {
        primary: string
      },
      common: {
        white: string,
        black: string,
        purple: string
      }
    }
    navbar: {
      background: string,
      icons: string
    }
    page: {
      background: string
      scrollbarThumb: string
    }
    buttons: {
      primary: {
        background: string
        hoverBackground: string
        color: string
        hoverColor: string
      }
      secondary: {
        background: string
        hoverBackground: string
        color: string
        hoverColor: string
      }
      // tertiary: {
      //   background: string
      //   hoverBackground: string
      //   color: string
      //   hoverColor: string
      // }
      // danger: {
      //   background: string
      //   hoverBackground: string
      //   color: string
      //   hoverColor: string
      // }
    },
    dialog: {
      background: string,
      secondaryBackground: string,
      highlightBackground: string,
      textPrimary: string,
      textSecondary: string,
      textTertiary: string
    }
  }
}
