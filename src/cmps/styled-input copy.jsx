import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const StyledInput = ({ label, color = "#1ec896" }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ffffff",
      },
    },
    typography: {
      allVariants: {
        color: color,
      },
    },
    components: {
      MuiInputBase: {
        styleOverrides: {
          input: {
            color: "gold",
            "&::before": {
              borderBottom: `1px solid ${color};`, // use your color
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <TextField label={label} size="small" />
    </ThemeProvider>
  );
};

export default StyledInput;
