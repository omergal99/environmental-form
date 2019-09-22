import React, { useState } from 'react';

import TitleRepeat from './TitleRepeat';

function UploadFile({ field, onUpdateValue }) {

  const [files, setFiles] = useState(field.value);

  const removeFile = idx => {
    const copyFiles = [...files];
    copyFiles.splice(idx, 1);
    setFiles(copyFiles);
  }

  const updateValue = ev => {
    if (ev.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(ev.target.files[0]);
      const name = ev.target.files[0].name;
      reader.onload = ev => {
        const copyFiles = [...files];
        copyFiles.push({ src: ev.target.result, name })
        setFiles(copyFiles);
        onUpdateValue(copyFiles);
      }
    }
  }

  const listValue = files ? files.map((file, idx) => {
    return <div className="file-name" key={idx}>
      <img className="remove-icon" onClick={() => removeFile(idx)} src="assets/img/icons/delete.png" alt="Delete" title="Delete" />
      <span>{file.name}</span>
    </div>
  }) : ''

  return (
    <div className="form-type-base form-type-upload-file">
      <TitleRepeat field={field} />

      <div className="file-names">{listValue}</div>

      <label className="upload-file" htmlFor="upload-file" title="Upload File">
        <img src="assets/img/icons/file.png" alt="File" title="File" /><span>{field.placeholder}</span>
      </label>
      <input type="file" id="upload-file" required={field.isMandatory} onChange={updateValue} />
    </div>
  );
}

export default React.memo(UploadFile)