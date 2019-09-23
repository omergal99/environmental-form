import React, { useState } from 'react';
import TitleRepeat from './TitleRepeat';

function InputNumbers({ field, onUpdateValue, isError }) {

  const [value, setValue] = useState(field.value);
  const [isErr, setIsErr] = useState(false);
  const [errName, setErrName] = useState(field.isMandatory);

  const sendvalue = () => {
    onUpdateValue(value);
    setErrName(field.isMandatory);
    (field.isMandatory && !value) ? setIsErr(true) : setIsErr(false);
  }

  const updateValue = ev => {
    const reg = new RegExp('^[0-9+-/()]+$|^$');
    if (reg.test(ev.target.value)) {
      setValue(ev.target.value);
      setErrName(field.isMandatory);
      (field.isMandatory && !ev.target.value) ? setIsErr(true) : setIsErr(false);
    }else{
      setErrName('ניתן להזין מספרים או תווים -,+,(,)');
      setIsErr(true);
    }
  }

  const errClass = isErr || (isError && field.isMandatory && !value);
  return (
    <div className={`form-type-base form-type-input ${errClass ? 'error-mode' : ''}`}>
      <TitleRepeat field={field} />
      <input className="base-input" type="text" value={value} placeholder={field.placeholder} required={field.isMandatory}
        onChange={updateValue} onBlur={sendvalue} />
      <span className="error-note">{errName}</span>
    </div>
  );
}

export default React.memo(InputNumbers)