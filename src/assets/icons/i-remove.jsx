const IRemove = () => {
  return (
    <svg viewBox="0 0 24 24">
      <line
        style={{
          stroke: "black",
          strokeLinecap: "round",
          strokeMiterlimit: 10,
          strokeWidth: "4px",
        }}
        x1="2.5"
        y1="2.5"
        x2="21.5"
        y2="21.5"
      />
      <line
        style={{
          stroke: "black",
          strokeLinecap: "round",
          strokeMiterlimit: 10,
          strokeWidth: "4px",
        }}
        x1="21.5"
        y1="2.5"
        x2="2.5"
        y2="21.5"
      />
    </svg>
  );
};

export default IRemove;
