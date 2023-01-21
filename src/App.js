import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";

// import { createTheme, ThemeProvider } from "@material-ui/core";

// const theme = createTheme({
//   direction: "rtl",
//   palette: {
//     primary: {
//       main: "#1ec896",
//       contrastText: "#fafbfc",
//     },
//     secondary: {
//       main: "#da447d",
//       contrastText: "#fafbfc",
//     },
//     info: {
//       main: "#f5be0a",
//       contrastText: "#1e0664",
//     },
//   },
//   typography: {
//     fontFamily: "",
//     fontWeightLight: 300,
//     fontWeightRegular: 400,
//     fontWeightMedium: 500,
//     fontWeightBold: 700,
//   },
// });

const App = () => {
  return (
    // <ThemeProvider theme={theme}>
    <Routes>
      {routes.map(({ path, component: Component }) => (
        <Route key={path} element={<Component />} path={path} />
      ))}
    </Routes>
    // </ThemeProvider>
  );
};

export default App;
