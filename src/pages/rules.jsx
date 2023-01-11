import { Link } from "react-router-dom";
import SmallHeader from "../cmps/small-header";

const Rules = () => {
  return (
    <main className="rules">
      <SmallHeader />
      <div className="text">
        <h2>הוראות המשחק</h2>
        <p>יוצרים משחק חדש ומזמינים חברים להצטרף אליכם</p>
        <div className="circle"></div>
        <p>כל שחקן מקבל לרשותו 4 תמונות של תגובות שונות</p>
        <div className="circle"></div>
        <p>
          בכל סיבוב תוצג סיטואציה שונה, וכל שחקן ייבחר באופן אנונימי מבין
          התמונות שלו, את התמונה הכי קורעת שיש לו שמתאימה כתגובה לסיטואציה
        </p>
        <div className="circle"></div>
        <p>
          לאחר שכל השחקנים ייבחרו תמונות, יחל סיבוב הצבעה לתמונה הכי קורעת
          <span>(לא ניתן להצביע לעצמך)</span>
        </p>
        <div className="circle"></div>
        <p>
          השחקן שבחר את התמונה הכי קורעת יזכה ב 3 נקודות. במקרה של תיקו בין 2
          שחקנים - כל שחקן יזכה ב 2 נקודות. במקרה של תיקו קבוצתי אף שחקן לא יזכה
          בנקודה.
        </p>
        <div className="circle"></div>
        <p>המנצח הוא השחקן הראשון שמגיע ל20 נקודות!</p>
      </div>
      <Link to="/auth">
        <button className="btn-pink">כניסה למערכת</button>
      </Link>
    </main>
  );
};

export default Rules;
