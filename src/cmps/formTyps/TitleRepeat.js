import React from 'react';

function TitleRepeat({ field }) {

  return (
    <div className="base-title-icon flex space-between align-center" style={{ width: field.type === 'uploadFile' ? 'fit-content' : '' }}>
      <h4>{field.name} {field.isMandatory ? '' : '(אופציונלי)'}</h4>
      {field.information &&
        <div className="question">
          <img src="assets/img/icons/question.png" alt="Question" title="Question" />
          <p>{field.information}</p>
        </div>
      }
    </div>
  );
}

export default React.memo(TitleRepeat)