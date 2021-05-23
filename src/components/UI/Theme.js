import { createMuiTheme } from "@material-ui/core/styles";

export const Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1769aa",
    },
    secondary: {
      main: "#ff9800",
      light: "#ffa726",
    },
    text: {
      secondary: "#868686",
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: "700",
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
    h2: {
      fontSize: "2.5em",
      fontWeight: 700,
      fontFamily: "Raleway",
      lineHeight: 1.5,
    },
    h4: {
      fontSize: "1.75rem",
      fontWeight: 700,
      fontFamily: "Raleway",
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
    },
    learnMoreButton: {
      color: "#1769aa",
      borderColor: "#1769aa",
      fontFamily: "Roboto",
      borderWidth: 2,
      fontSize: "0.8rem",
      fontWeight: "bold",
      borderRadius: 50,
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
    },
    subtitle2: {
      color: "white",
      fontSize: "1.25rem",
      fontWeight: 300,
    },
    body2: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: "#868686",
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        fontSize: "1rem",
        color: "#1769aa",
      },
    },
    MuiInput: {
      root: {
        color: "#868686",
        fontWeight: 300,
      },
      underline: {
        "&::before": {
          borderBottom: "2px solid #1769aa",
        },
        "&:hover:not($disabled):not($focused):not($error)::before": {
          borderBottom: "2px solid #1769aa",
        },
      },
    },
  },
});
