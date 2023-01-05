import btns from "./btns";
import FooterBTN from "./footer-btn";

const Footer = () => {
  return (
    <footer>
      {btns.map(({ title, icon }) => (
        <FooterBTN key={title} title={title} icon={icon} />
      ))}
    </footer>
  );
};

export default Footer;
