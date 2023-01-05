const FooterBTN = ({ title, icon }) => {
  return (
    <div className="footer-btn">
      <h5>{title}</h5>
      {icon}
    </div>
  );
};

export default FooterBTN;
