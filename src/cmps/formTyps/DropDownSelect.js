import React, { useState } from 'react';
import TitleRepeat from './TitleRepeat';

function DropDownSelect({ field, onUpdateValue, isError }) {

  const [value, setValue] = useState(field.value ? field.value : field.placeholder);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [isErr, setIsErr] = useState(false);

  const changeValue = newValue => {
    setValue(newValue);
    onUpdateValue(newValue);
    toggleSelect();
    (field.isMandatory && !newValue) ? setIsErr(true) : setIsErr(false);
  }
  const toggleSelect = () => {
    setIsSelectOpen(!isSelectOpen);
    ((field.isMandatory && !value) || (value === field.placeholder)) ? setIsErr(true) : setIsErr(false);
  }

  const listOptions = field.list ? field.list.map(item => {
    return <div onClick={()=>changeValue(item.title)} key={item.id}>{item.title}</div>
  }) : <div></div>

  const errClass = isErr || (isError && ((field.isMandatory && !value) || (value === field.placeholder)));
  return (
    <div className={`form-type-base drop-down-select ${errClass ? 'error-mode' : ''}`}>
      <TitleRepeat field={field} />

      <div className="demo-select flex space-between align-center" onClick={toggleSelect}
        style={{ color: field.placeholder === value ? 'rgb(73, 86, 102)' : '' }} >
        <span>{value}</span>
        <img className={isSelectOpen ? 'rotate180' : ''} alt="Arrow Open"
          src={errClass ? 'assets/img/icons/arrow-down-red.png' : 'assets/img/icons/arrow-down.png'} />
      </div>

      <div className="demo-options" style={{ display: isSelectOpen ? '' : 'none' }}>
        {listOptions}
      </div>

      <span className="error-note">{field.isMandatory}</span>
    </div>
  );
}

export default React.memo(DropDownSelect)