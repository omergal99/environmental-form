import React, { useState } from 'react';
import TitleRepeat from './TitleRepeat';

function Quantity({ field, onUpdateValue, isError }) {

  const [value, setValue] = useState(field.value);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [isErr, setIsErr] = useState(false);

  const sendvalue = () => {
    onUpdateValue(value);
    (field.isMandatory && !value.quantity) ? setIsErr(true) : setIsErr(false);
  }

  const updateQuantity = ev => {
    const num = ev.target.value;
    const copyValue = { ...value };
    if ((num && !isNaN(num) && num >= 0) || num === '') {
      copyValue.quantity = num;
      setValue(copyValue);
    }
    (field.isMandatory && !copyValue.quantity) ? setIsErr(true) : setIsErr(false);
  }

  const changeKind = newOption => {
    const copyValue = { ...value };
    copyValue.kind = newOption;
    setValue(copyValue);
    toggleSelect();
    sendvalue();
  }
  const toggleSelect = () => {
    setIsSelectOpen(!isSelectOpen);
  }

  const listOptions = field.list ? field.list.map(item => {
    return <div onClick={()=>changeKind(item.title)} key={item.id}>{item.title}</div>
  }) : <div></div>

  const errClass = isErr || (isError && field.isMandatory && !value.quantity);
  return (
    <div className={`form-type-base form-type-quantity ${errClass ? 'error-mode' : ''}`}>
      <TitleRepeat field={field} />

      <div className="flex space-between">
        <input className="base-input" type="text" value={value.quantity} placeholder={field.placeholder} required={field.isMandatory}
          onChange={updateQuantity} onBlur={sendvalue} />

        <div className="demo-select demo-select-small flex space-between align-center" onClick={toggleSelect} >
          <span>{value.kind}</span>
          <img className={isSelectOpen ? 'rotate180' : ''} src="assets/img/icons/arrow-down.png" alt="Arrow Open" />
        </div>

        <div className="demo-options demo-options-small" style={{ display: isSelectOpen ? '' : 'none' }}>
          {listOptions}
        </div>
      </div>

      <span className="error-note">{field.isMandatory}</span>
    </div>
  );
}

export default React.memo(Quantity)