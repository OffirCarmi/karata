const IAdd = ({ action, data }) => {
  return (
    <svg onClick={() => action(data)} viewBox="0 0 24 24">
      <line
        style={{
          strokeLinecap: "round",
          strokeMiterlimit: 10,
          strokeWidth: "4px",
        }}
        x1="12"
        y1="2.5"
        x2="12"
        y2="21.5"
      />
      <line
        style={{
          strokeLinecap: "round",
          strokeMiterlimit: 10,
          strokeWidth: "4px",
        }}
        x1="21.5"
        y1="12"
        x2="2.5"
        y2="12"
      />
    </svg>
  );
};

export default IAdd;
