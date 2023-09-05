import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { deepPurple, indigo, red } from "@mui/material/colors";
import { ThemeProvider } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: [
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    primary: {
      main: deepPurple[500],
    },
    secondary: {
      main: indigo[500],
      light: "#757ce8",
      contrastText: "#fff",
    },
    error: red,
  },
});

theme = responsiveFontSizes(theme);

// theme.typography.h1 = {
//   fontSize: "2.25rem",
//   margin: "1rem 0",
//   fontWeight: 600,
//   // margin: "1rem 0",
//   "@media (min-width:600px)": {
//     fontSize: "3.5rem",
//   },
//   [theme.breakpoints.up("md")]: {
//     fontSize: "3.75rem",
//   },
// };

// theme.typography.h2 = {
//   fontSize: "2rem",
//   fontWeight: 500,
//   margin: "1rem 0",
//   "@media (min-width:600px)": {
//     fontSize: "2.25rem",
//   },
//   [theme.breakpoints.up("md")]: {
//     fontSize: "2.5rem",
//   },
// };

// theme.typography.h3 = {
//   fontSize: "1.5rem",
//   fontWeight: 400,
//   margin: "1rem 0",
//   "@media (min-width:600px)": {
//     fontSize: "1.75rem",
//   },
//   [theme.breakpoints.up("md")]: {
//     fontSize: "2rem",
//   },
// };

// theme.typography.h4 = {
//   fontSize: "1.35rem",
//   fontWeight: 300,
//   margin: "1rem 0",
//   "@media (min-width:600px)": {
//     fontSize: "1.5rem",
//   },
//   [theme.breakpoints.up("md")]: {
//     fontSize: "1.75rem",
//   },
// };
// theme.typography.h5 = {
//   fontSize: "1.25rem",
//   fontWeight: 200,
//   margin: "1rem 0",
//   "@media (min-width:600px)": {
//     fontSize: "1.35rem",
//   },
//   [theme.breakpoints.up("md")]: {
//     fontSize: "1.5rem",
//   },
// };
// theme.typography.h6 = {
//   fontSize: "1rem",
//   fontWeight: 100,
//   margin: "1rem 0",
//   "@media (min-width:600px)": {
//     fontSize: "1.25rem",
//   },
//   [theme.breakpoints.up("md")]: {
//     fontSize: "1.5rem",
//   },
// };

function App(): JSX.Element {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
