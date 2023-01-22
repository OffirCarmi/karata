import { useState } from "react";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPass, setConfirmedPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password, confirmedPass);
  };

  return (
    <section className="signup">
      <h5 className="signup">שחקן חדש</h5>
      <div className="form-container btm">
        <form className="signup" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="שם שחקן.ית"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="אימייל"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="אימות סיסמא"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="סיסמא"
            value={confirmedPass}
            onChange={(e) => setConfirmedPass(e.target.value)}
          />
        </form>
        <button className="yellow-btn" onClick={(e) => handleSubmit(e)}>
          יאללה בוא נתחיל
        </button>
      </div>
    </section>
  );
};

export default SignupForm;
