import BigHeader from "../../cmps/big-header";
import Footer from "../../cmps/footer/footer";
import Rules from "./cmps/rules";

const Welcome = () => {
  return (
    <main className="welcome">
      <BigHeader />
      <Rules />
      <div className="btns-box">
        <button className="btn-yellow">להצטרפות</button>
        <button className="btn-gray">כבר נרשמתי</button>
      </div>
      <Footer />
    </main>
  );
};

export default Welcome;
