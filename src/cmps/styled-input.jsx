import { ClassNames } from "@emotion/react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  input: {
    // backgroundColor: "transparent",
    marginBottom: 10,
    borderRadius: 20,
    
    // height: 30,
    // lineHeight: 30,
    // '&:hover': {

    // }
  },
});

const StyledInput = ({ label, type, setValue }) => {
  const classes = useStyles();

  return (
    <TextField
      onChange={(e) => setValue(e.target.value)}
      label={label}
      // color={type}
      className={classes.input}
      variant="outlined"
      type={label === "סיסמא" ? "password" : "text"}
    />
  );
};

export default StyledInput;
