import React, { useState } from 'react';
import TitleRepeat from './TitleRepeat';

function DropDown({ field, onUpdateValue, isError }) {

  const [searchValue, setSearchValue] = useState('');
  const [ingredients, setIngredients] = useState(field.value);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [isErr, setIsErr] = useState(false);
  const [isErrPercent, setIsErrPercent] = useState([0,0,0,0,0,0,0,0,0,0,0,0]);

  const removeItem = idx => {
    const copyIngredients = [...ingredients];
    copyIngredients.splice(idx, 1);
    setIngredients(copyIngredients);
    (field.isMandatory && !copyIngredients.length) ? setIsErr(true) : setIsErr(false);

    let errPre = isErrPercent;
    errPre.splice(idx, 1);
    setIsErrPercent(errPre);
  }

  const changeIngredients = newIng => {
    const updateIngredients = [...ingredients, newIng];
    setIngredients(updateIngredients);
    onUpdateValue(updateIngredients);
    setIsErr(false);

    let errPre = isErrPercent;
    errPre.push(newIng.percent);
    setIsErrPercent(errPre);
  }

  const updateSearchValue = (ev) => {
    setSearchValue(ev.target.value);
    ev.target.value.length > 1 ? setIsSelectOpen(true) : setIsSelectOpen(false);
    (field.isMandatory && !ev.target.value && !ingredients.length) ? setIsErr(true) : setIsErr(false);
  }

  const updatePercent = (ev, idx) => {
    const reg = new RegExp('^[0-9+-/]+$|^$')
    if (ev.target.value.length < 6 && reg.test(ev.target.value)) {
      const copyPercent = [...ingredients];
      copyPercent[idx]['percent'] = ev.target.value;
      setIngredients(copyPercent);

      let errPre = isErrPercent;
      errPre[idx] = ev.target.value;
      setIsErrPercent(errPre);
    }
  }

  const listIngredients = ingredients ? ingredients.map((ingredient, idx) => {
    let isPercent = ingredient['percent'] ? ingredient.percent : '';
    return <div className="ingredient-item" key={idx}>
      <img className="remove-icon" onClick={() => removeItem(idx)} src="assets/img/icons/delete.png" alt="Delete" title="Delete" />
      <div className="item-div">
        <span>{ingredient.inventoryName}</span>
        <span>{ingredient.molecularFormula}</span>
        <span>{ingredient.casNumber}</span>
      </div>
      <span className={`wrap-precent ${!isErrPercent[idx] ? 'error-percent' : ''}`}>
        <input className="base-input" style={{ padding: isPercent ? '8px 24px 8px 10px' : '' }}
          type="text" value={isPercent} placeholder="אחוז מדוייק או טווח" required={field.isMandatory}
          onChange={(ev) => updatePercent(ev, idx)} />
        <span className="icon-percent">{isPercent ? '%' : ''}</span>
        <span className="error-note-precent">יש לרשום אחוז או טווח</span>
      </span>
    </div>
  }) : ''

  const makeFindStringBold = (string, findToBold) => {
    let length = string.split(findToBold).length - 1;
    return string.split(findToBold).map((text, idx) => {
      return <span key={idx}><span>{text}</span>
        {length > idx && <span style={{ fontFamily: 'Assistant-bold' }}>{findToBold}</span>}
      </span>
    });
  }

  const listOptions = (field.list && searchValue.length > 1) ? field.list.reduce((acc, item) => {
    const alredyInListIngredients = ingredients.find((ing) => ing.id === item.id)
    if (!alredyInListIngredients) {
      let name = item.inventoryName;
      let formula = item.molecularFormula;
      let casNumber = item.casNumber.split('').reverse().join('');
      let isIncludeSearch = false;
      if (name.includes(searchValue)) {
        isIncludeSearch = true;
        name = makeFindStringBold(name, searchValue);
      }
      if (formula.includes(searchValue)) {
        isIncludeSearch = true;
        formula = makeFindStringBold(formula, searchValue);
      }
      if (casNumber.includes(searchValue)) {
        isIncludeSearch = true;
        casNumber = makeFindStringBold(casNumber, searchValue);
      }
      if (isIncludeSearch) {
        acc.push(<div className="line-option flex" onClick={() => changeIngredients(item)} key={item.id}>
          <span className="name">{name}</span>
          <span className="formula">{formula}</span>
          <span className="casNumber">{casNumber}</span>
        </div>);
      }
    }
    return acc;
  }, []) : ''

  const errClass = isErr || (isError && field.isMandatory && !ingredients.length);
  return (
    <div className={`form-type-base form-type-drop-down ${errClass ? 'error-mode' : ''}`}>
      <h3>רשימת מרכיבים</h3>

      <TitleRepeat field={field} />

      {(listIngredients.length) ?
        <div className="ingredient-title">
          <span className="ing-name">שם המרכיב</span>
          <span>פורמולה</span>
          <span>מספר CAS</span>
          <span>% מכלל התערובת</span>
        </div> : ''
      }
      <div className="ingredient-items">{listIngredients}</div>

      <input className="base-input" type="text" value={searchValue} placeholder={field.placeholder} required={field.isMandatory}
        onChange={updateSearchValue} />

      <div className="demo-options" style={{ display: isSelectOpen ? '' : 'none' }}>
        {listOptions}
      </div>
      <span className="error-note">{field.isMandatory}</span>
    </div>
  );
}

export default React.memo(DropDown)