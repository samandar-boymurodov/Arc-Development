import { createMuiTheme } from '@material-ui/core/styles'

export const Theme = createMuiTheme({
    palette: {
        primary: {
            main: "#1769aa"
        },
        secondary: {
            main: "#fb8c00"
        }
    },
    typography: {
        tab: {
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: "700",
            fontSize: "1rem"
        }
    }
})