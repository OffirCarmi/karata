import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { authService } from "../../services/auth.service";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async ({ name, password }) => {
    const player = await authService.login(name, password);
    if (player) navigate("/welcome");
  };

  return (
    <section className="login">
      <h5 className="login">שחקן רשום</h5>
      <div className="form-container">
        <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", {
              required: "שדה חובה למילוי",
              minLength: { value: 2, message: "שם חייב להיות 2 תווים לפחות" },
            })}
            type="text"
            placeholder="שם שחקן.ית"
          />
          <p
            className="validation-message"
            style={{ display: errors.name?.message ? "block" : "none" }}
          >
            {errors.name?.message}
          </p>
          <input
            {...register("password", { required: "שדה חובה למילוי" })}
            type="password"
            placeholder="סיסמא"
          />
          <p
            className="validation-message"
            style={{ display: errors.password?.message ? "block" : "none" }}
          >
            {errors.password?.message}
          </p>
        </form>
        <button
          form="login-form"
          type="submit"
          className="green-btn"
          onClick={handleSubmit}
        >
          תכניס אותי כבררר
        </button>
      </div>
    </section>
  );
};

export default LoginForm;
