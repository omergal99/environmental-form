import React from 'react';

import Input from './formTyps/Input';
import DropDownSelect from './formTyps/DropDownSelect';
import Ratio from './formTyps/Ratio';
import UploadFile from './formTyps/UploadFile';
import Quantity from './formTyps/Quantity';
import DropDown from './formTyps/DropDown';
import TextArea from './formTyps/TextArea';
import InputNumbers from './formTyps/InputNumbers';

function FormSection({ section, onUpdateSection, isError }) {

  const updateSection = (value, idx) => {
    var copySection = { ...section };
    copySection.fields[idx].value = value;
    onUpdateSection(copySection);
  }

  const fields = section.fields.map((field, idx) => {
    if (field.type === 'dropDownSelect') {
      return <DropDownSelect field={field} onUpdateValue={value => updateSection(value, idx)} isError={isError} key={idx} />
    }
    if (field.type === 'ratio') {
      return <Ratio field={field} onUpdateValue={value => updateSection(value, idx)} isError={isError} key={idx} />
    }
    if (field.type === 'uploadFile') {
      return <UploadFile field={field} onUpdateValue={value => updateSection(value, idx)} isError={isError} key={idx} />
    }
    if (field.type === 'quantity') {
      return <Quantity field={field} onUpdateValue={value => updateSection(value, idx)} isError={isError} key={idx} />
    }
    if (field.type === 'dropDown') {
      return <DropDown field={field} onUpdateValue={value => updateSection(value, idx)} isError={isError} key={idx} />
    }
    if (field.type === 'textArea') {
      return <TextArea field={field} onUpdateValue={value => updateSection(value, idx)} isError={isError} key={idx} />
    }
    if (field.type === 'inputNumbers') {
      return <InputNumbers field={field} onUpdateValue={value => updateSection(value, idx)} isError={isError} key={idx} />
    }
    return <Input field={field} onUpdateValue={value => updateSection(value, idx)} isError={isError} key={idx} />
  })

  return (
    <div className="section">
      <h3>{section.subTitle}</h3>
      <div className="flex wrap space-between">
        {fields}
      </div>
    </div>
  );
}

export default React.memo(FormSection)