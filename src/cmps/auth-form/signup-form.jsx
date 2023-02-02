import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { authService } from "../../services/auth.service";
import ErrorMsg from "./error-msg";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async ({ name, email, password }) => {
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
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register("name", {
              required: "*שדה חובה למילוי",
              minLength: { value: 2, message: "שם באורך 2 תווים לפחות" },
              validate: async (val) => {
                const takenNames = await authService.getAllPlayersNames();
                if (takenNames.includes(val)) return "השם שבחרת תפוס";
              },
            })}
            placeholder="שם שחקן.ית"
            type="text"
          />
          {errors.name && <ErrorMsg errors={errors} field="name" />}

          <input
            {...register("email", {
              required: "*שדה חובה למילוי",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "כתובת אימייל לא חוקית",
              },
            })}
            placeholder="אימייל"
            type="text"
          />
          {errors.email && <ErrorMsg errors={errors} field="email" />}

          <input
            {...register("password", {
              required: "*שדה חובה למילוי",
              minLength: { value: 3, message: "סיסמא באורך 3 תווים לפחות" },
            })}
            placeholder="סיסמא"
            type="password"
          />
          {errors.password && <ErrorMsg errors={errors} field="password" />}

          <input
            {...register("confirm", {
              required: "*שדה חובה למילוי",
              minLength: { value: 3, message: "סיסמא באורך 3 תווים לפחות" },
              validate: (val) => {
                if (watch("password") !== val) return "אימות סיסמא נכשל";
              },
            })}
            placeholder="אימות סיסמא"
            type="password"
          />
          {errors.confirm && <ErrorMsg errors={errors} field="confirm" />}
        </form>
        <button
          form="signup-form"
          type="submit"
          className="pink-btn"
          onClick={handleSubmit}
        >
          יאללה בוא נתחיל
        </button>
      </div>
    </section>
  );
};

export default SignupForm;
