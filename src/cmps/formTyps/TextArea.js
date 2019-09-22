import React, { useState } from 'react';
import TitleRepeat from './TitleRepeat';

function TextArea({ field, onUpdateValue, isError }) {

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
    <div className={`form-type-base form-type-text-area ${errClass ? 'error-mode' : ''}`}>
      <TitleRepeat field={field} />
      <textarea className="base-input text-area" onChange={updateValue} onBlur={sendvalue}>
        {value}
      </textarea>
      <span className="error-note">{field.isMandatory}</span>
    </div>
  );
}

export default React.memo(TextArea)