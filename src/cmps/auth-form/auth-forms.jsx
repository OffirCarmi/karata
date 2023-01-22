import LoginForm from "./login-form";
import SignupForm from "./signup-form";

const AuthForms = () => {
  return (
    <section className="auth-forms frame">
      <LoginForm />
      <SignupForm />
    </section>
  );
};

export default AuthForms;
