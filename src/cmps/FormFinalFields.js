import React from 'react';

function FormFinalFields({ fields }) {

  const listFields = fields.map((field, idx) => {
    var value = field.value;
    var listDropDown;
    var isDrop = false;
    if (field.type === 'dropDown') {
      if (value && value.length) {
        listDropDown = value.map(ingredient => {
          let isPercent = ingredient['percent'] ? ingredient.percent : '';
          return <div key={ingredient.id}>
            <div className="ingredient-items">
              <div className="ingredient-item" key={idx}>
                <div className="item-div">
                  <span>{ingredient.inventoryName}</span>
                  <span>{ingredient.molecularFormula}</span>
                  <span>{ingredient.casNumber}</span>
                </div>
                <span className="wrap-precent">
                  <div className="text" style={{ padding: isPercent ? '8px 14px 8px 10px' : '' }}>
                    {isPercent}%
                  </div>
                </span>
              </div>
            </div>
          </div>
        })
        value = listDropDown;
        isDrop = true;
      } else { value = ''; }
    }
    if (field.type === 'quantity') {
      value = value.quantity;
    }
    if (field.type === 'uploadFile') {
      value.map(item => <span>{item}</span>)
    }

    return <div className={`final-field ${isDrop ? 'final-drop-field' : ''}`} key={idx}>
      <span className="title" style={{ visibility: field.secondName === '' ? 'hidden' : '' }}>
        {(field.secondName || field.secondName === '') ? field.secondName : field.name}
        <span>{(field.secondName === '') ? '' : ':'}</span>
      </span>
      <span className="value" style={{ display: isDrop ? 'block' : '', width: isDrop ? '100%' : '', padding: isDrop ? '0' : '' }}>
        {isDrop &&
          <div className="ingredient-title">
            <span className="ing-name">שם המרכיב</span>
            <span>פורמולה</span>
            <span>מספר CAS</span>
            <span>% מכלל התערובת</span>
          </div>
        }
        {value}
      </span>
    </div>
  })

  return (
    <div className="final-fields">
      {listFields}
    </div>
  );
}

export default React.memo(FormFinalFields)