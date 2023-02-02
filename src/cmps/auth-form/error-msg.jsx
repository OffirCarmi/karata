const ErrorMsg = ({ errors, field }) => {
  return (
    <p
      className="validation-message"
      style={{ display: errors[field]?.message ? "block" : "none" }}
    >
      {errors[field].message}
    </p>
  );
};

export default ErrorMsg;
