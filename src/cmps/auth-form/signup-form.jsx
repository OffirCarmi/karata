import { TextField } from "@mui/material";

const SignupForm = () => {
  return (
    <>
      <h3 className="new-player">שחקן חדש</h3>
      <section className="form-container">
        <form action="">
          <TextField type="text" label="שם שחקן.ית" variant="outlined" />
          <TextField type="text" label="email" variant="outlined" />
          <TextField type="text" label="סיסמא" variant="outlined" />
          <TextField type="text" label="אימות סיסמא" variant="outlined" />
        </form>
        <button className="yellow-btn">תרשום אותי</button>
      </section>
    </>
  );
};

export default SignupForm;
