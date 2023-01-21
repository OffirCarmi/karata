import { Link } from "react-router-dom";

import ILinkedin from "../assets/icons/i-linkedin";
import SmallHeader from "../cmps/small-header";

const About = () => {
  return (
    <main className="about">
      <SmallHeader />
      <h2>על המשחק</h2>
      <div className="about-box">
        <div className="my-words">
          <p>היי, אני אופיר כרמי ואני מפתח תוכנה</p>
          <p>
            אחד הדברים שהכי מציק לי זה אנשים ששוקעים בטלפון בזמן שהם בחברת אנשים
            אחרים, וזה מה שהוביל אותי ליצור את המשחק הזה.
          </p>
          <p>
            השתמשתי בידע והניסיון שלי (כמתכנת בהווה ומעצב בדימוס) על מנת לתכנן,
            לעצב ולבנות את האתר בעצמי - מההתחלה ועד הסוף.
          </p>
          <p>אני מזמין אתכם לשחק ולצחוק עם החברים שלכם במשחק !</p>
        </div>
        {/* <h4>
          כי אם כבר כולם שקועים במסך, <br /> לפחות שיהיה קורע...
        </h4> */}
        <section className="contact-box">
          <div className="img-box">
            <img src={require("../assets/imgs/offir.png")} alt="Offir Carmi" />
          </div>
          <div className="contact">
            <p>
              לרעיונות, הצעות וכל מה שבא לכם <br />
              מוזמנים ליצור איתי קשר
            </p>
            <h5>offircarmi@gmail.com</h5>
            <a
              href="https://www.linkedin.com/in/offir-carmi-b77279240/"
              target="_blank"
              rel="noreferrer"
            >
              <ILinkedin />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
