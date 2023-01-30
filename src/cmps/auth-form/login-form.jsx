import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { authService } from "../../services/auth.service";

const LoginForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const player = await authService.login(name, password);
    if (player) navigate("/welcome");
  };

  return (
    <section className="login">
      <h5 className="login">שחקן רשום</h5>
      <div className="form-container">
        <form id="login-form" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="שם שחקן.ית"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="password"
            placeholder="סיסמא"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <button
          form="login-form"
          type="submit"
          className="yellow-btn"
          onClick={handleSubmit}
        >
          תכניס אותי כבררר
        </button>
      </div>
    </section>
  );
};

export default LoginForm;
