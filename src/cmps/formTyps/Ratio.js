import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TitleRepeat from './TitleRepeat';


export default function Ratio({ field, onUpdateValue, isError }) {

  const [value, setValue] = useState(field.value);
  const [isErr, setIsErr] = useState(false);

  function handleChange(ev) {
    var val = ev.target.value;
    setValue(val)
    onUpdateValue(val);
    (field.isMandatory && !val) ? setIsErr(true) : setIsErr(false);
  }

  const errClass = isErr || (isError && field.isMandatory && !value);
  return (
    <div className={`form-type-base form-type-ratio ${errClass ? 'error-mode' : ''}`}>
      <TitleRepeat field={field} />

      <RadioGroup aria-label="gender" name="gender2" onChange={handleChange}>
        <FormControlLabel className="single-ratio"
          value="עזה"
          checked={value === "עזה"}
          control={<Radio color="primary" />}
          label="עזה"
          />
        <FormControlLabel className="single-ratio"
          value='איו"ש'
          checked={value === 'איו"ש'}
          control={<Radio color="primary" />}
          label='איו"ש'
        />
      </RadioGroup>
      <span className="error-note">{field.isMandatory}</span>
    </div>
  );
}