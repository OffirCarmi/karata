import { useState } from "react";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name:", name);
    console.log("password:", password);
  };

  return (
    <section className="login">
      <h5 className="login">שחקן רשום</h5>
      <div className="form-container">
        <form onSubmit={(e) => handleSubmit(e)}>
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
        <button className="yellow-btn" onClick={handleSubmit}>
          תכניס אותי כבררר
        </button>
      </div>
    </section>
  );
};

export default LoginForm;
