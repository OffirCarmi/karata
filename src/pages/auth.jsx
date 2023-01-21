import SmallHeader from "../cmps/small-header";
import AuthForms from "../cmps/auth-form/auth-forms";

const Auth = () => {
  return (
    <main className="auth">
      <SmallHeader />
      <h2>כניסה למערכת</h2>
      <AuthForms />
      <p>או</p>
      <button className="yellow-btn google-btn">כניסה עם google</button>
    </main>
  );
};

export default Auth;
