// import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const StyledInput = ({ label, color = "#1ec896" }) => {
  return <TextField label={label} variant="outlined" color="secondary" />;
};

export default StyledInput;
