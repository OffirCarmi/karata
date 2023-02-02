import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { authService } from "../../services/auth.service";
import ErrorMsg from "./error-msg";

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
              required: "*שדה חובה למילוי",
              minLength: { value: 2, message: "שם חייב להיות 2 תווים לפחות" },
            })}
            type="text"
            placeholder="שם שחקן.ית"
          />
          {errors.name && <ErrorMsg errors={errors} field="name" />}

          <input
            {...register("password", { required: "*שדה חובה למילוי" })}
            type="password"
            placeholder="סיסמא"
          />
          {errors.password && <ErrorMsg errors={errors} field="password" />}
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
