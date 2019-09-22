import React, { useState } from 'react';
import TitleRepeat from './TitleRepeat';

function Input({ field, onUpdateValue, isError }) {

  const [value, setValue] = useState(field.value);
  const [isErr, setIsErr] = useState(false);

  const sendvalue = () => {
    onUpdateValue(value);
    (field.isMandatory && !value) ? setIsErr(true) : setIsErr(false);
  }

  const updateValue = ev => {
    setValue(ev.target.value);
    (field.isMandatory && !ev.target.value) ? setIsErr(true) : setIsErr(false);
  }

  const errClass = isErr || (isError && field.isMandatory && !value);
  return (
    <div className={`form-type-base form-type-input ${errClass ? 'error-mode' : ''}`}>
      <TitleRepeat field={field} />
      <input className="base-input" type="text" value={value} placeholder={field.placeholder} required={field.isMandatory}
        onChange={updateValue} onBlur={sendvalue} />
      <span className="error-note">{field.isMandatory}</span>
    </div>
  );
}

export default React.memo(Input)