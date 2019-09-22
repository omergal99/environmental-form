import React, { useState } from 'react';

function ApproveForm() {

  const [ischeck, setIscheck] = useState(false);

  const toggleIscheck = () => {
    setIscheck(!ischeck);
  }

  return (
    <div className="approve-form">
      <h3>אנא אשר/י את הפרטים הבאים:</h3>
      <div className="check-content">
        <label className="checkbox-wrap" htmlFor="checkbox" >
          <div className="square">
            {ischeck && <img src="assets/img/icons/check-x.png" alt="check"/>}
          </div>
        </label>
        <input onClick={toggleIscheck} id="checkbox" type="checkbox" />
        <span className="text">אני, אנג'י סופט, מספר ת"ז ######, אבקש לאשר הבאה חד פעמית של המשלוח שפרטיו רשומים לעיל. אני מאשר/ת שכל הפרטים בטופס זה מלאים נכונים ומדויקים.</span>
      </div>
    </div>
  );
}

export default React.memo(ApproveForm)