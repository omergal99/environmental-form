import DataFormService from './DataFormService';
import Axios from 'axios';

async function getFormData() {
  const initialState = await DataFormService.getData();
  return Promise.resolve(initialState)
}

async function getDataFromAPI() {
  let results = await Axios.get(`https://my-json-server.typicode.com/galits/testNgsoft/db`)
  return results.data;
}

function doesItError(sections) {
  let isError = false;
  sections.forEach(section => {
    section.fields.forEach(field => {
      if (field.isMandatory) {
        if (!field.value) isError = true;
        else {
          if (field.type === 'dropDown') {
            if (field.value.length) {
              field.value.forEach(item => {
                if (!item.percent) isError = true;
              })
            } else isError = true;
          }
          if (field.type === 'quantity') {
            if (!field.value.quantity) isError = true;
          }
        }
      }
    })
  })
  return isError;
}

export default {
  getFormData,
  doesItError,
  getDataFromAPI
}
