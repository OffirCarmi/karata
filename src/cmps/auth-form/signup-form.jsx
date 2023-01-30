import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { authService } from "../../services/auth.service";

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

  const checkName = (e) => {
    // console.log(e.target.value);
    // return e.target.value !==;
  };

  const passwordWatch = watch("password");

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
              required: "שדה חובה למילוי",
              minLength: { value: 2, message: "שם באורך 2 תווים לפחות" },
              validate: async (val) => {
                const takenNames = await authService.getAllPlayersNames();
                if (takenNames.includes(val)) return "השם שבחרת תפוס";
              },
            })}
            type="text"
            placeholder="שם שחקן.ית"
            // onChange={(e) => checkName(e)}
          />
          <p
            className="validation-message"
            style={{ display: errors.name?.message ? "block" : "none" }}
          >
            {errors.name?.message}
          </p>
          <input
            {...register("email", {
              required: "שדה חובה למילוי",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "כתובת אימייל לא חוקית",
              },
            })}
            placeholder="אימייל"
          />
          <p
            className="validation-message"
            style={{ display: errors.email?.message ? "block" : "none" }}
          >
            {errors.email?.message}
          </p>
          <input
            {...register("password", {
              required: "שדה חובה למילוי",
              minLength: { value: 5, message: "סיסמא באורך 5 תווים לפחות" },
            })}
            placeholder="סיסמא"
            type="password"
          />
          <p
            className="validation-message"
            style={{ display: errors.password?.message ? "block" : "none" }}
          >
            {errors.password?.message}
          </p>
          <input
            {...register("confirm", {
              required: "שדה חובה למילוי",
              validate: (val) => {
                if (watch("password") !== val) return "אימות סיסמא נכשל";
              },
            })}
            placeholder="אימות סיסמא"
            type="password"
          />
          <p
            className="validation-message"
            style={{ display: errors.confirm?.message ? "block" : "none" }}
          >
            {errors.confirm?.message}
          </p>
          {/* <input
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
          /> */}
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
