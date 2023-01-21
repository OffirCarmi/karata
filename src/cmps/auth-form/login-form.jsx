import { TextField } from "@mui/material";
// import { createTheme } from "@mui/material/styles";
import StyledInput from "../styled-input";

const LoginForm = () => {
    const color = "#1ec896";

  return (
    <>
      <h3 className="registered-player">שחקן רשום</h3>
      <section className="form-container top">
        <form>
          <StyledInput label="שם שחקן.ית" color={color} />
          <StyledInput label="סיסמא" color={color} />
        </form>
        <button className="yellow-btn">תכניס אותי כבררר</button>
      </section>
    </>
  );
};

export default LoginForm;
