import React from 'react';

import FormFinalFields from './FormFinalFields';
import ApproveForm from './formTyps/ApproveForm';

function FormFinal({ levels, onUpdateLevel }) {

  const changeCurrLevel = (idx) => {
    idx ? onUpdateLevel(2) : onUpdateLevel(1);
  }

  const listLevels = levels.map((level, idx) => {
    const listFields = level.sections.map((section, idx) => {
      return <FormFinalFields fields={section.fields} key={idx} />
    })

    return <div className="final-section" key={idx}>
      <h3>{level.title}</h3>
      <div>{listFields}</div>
      <button className="edit-button" onClick={() => changeCurrLevel(idx)}>עריכה</button>
    </div>
  })

  return (
    <div className="final-levels">
      {listLevels}
      <ApproveForm />
    </div>
  );
}

export default React.memo(FormFinal)