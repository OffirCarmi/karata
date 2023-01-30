import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { authService } from "../../services/auth.service";

const SignupForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPass, setConfirmedPass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const playerToAdd = { name, email, password };
    const newPlayer = await authService.signup(playerToAdd);
    if (newPlayer) navigate("/welcome");
  };

  return (
    <section className="signup">
      <h5 className="signup">שחקן חדש</h5>
      <div className="form-container btm">
        <form
          id="signup-form"
          className="signup"
          onSubmit={(e) => handleSubmit(e)}
        >
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
            placeholder="סיסמא"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="אימות סיסמא"
            value={confirmedPass}
            onChange={(e) => setConfirmedPass(e.target.value)}
          />
        </form>
        <button
          form="signup-form"
          type="submit"
          className="pink-btn"
          onClick={(e) => handleSubmit(e)}
        >
          יאללה בוא נתחיל
        </button>
      </div>
    </section>
  );
};

export default SignupForm;
