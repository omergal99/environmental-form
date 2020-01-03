import DataFormService from './DataFormService';
// import Axios from 'axios';

async function getFormData() {
  const initialState = await DataFormService.getData();
  return Promise.resolve(initialState)
}

async function getDataFromAPI() {
  // let results = await Axios.get(`https://my-json-server.typicode.com/galits/testNgsoft/db`)
  // return results.data;
  return { "origins": [{ "id": 1, "title": "ישראל" }, { "id": 2, "title": "חוץ לארץ" }], "passages": [{ "id": 1, "title": "טול כרם" }, { "id": 2, "title": "שער אפריים" }, { "id": 3, "title": "אחר" }], "categories": [{ "id": 1, "title": "חקלאות" }, { "id": 2, "title": "בריאות" }, { "id": 3, "title": "תעשייתי" }, { "id": 4, "title": "אחר" }], "unitMeasures": [{ "id": 1, "title": "גרם" }, { "id": 2, "title": "ליטר" }, { "id": 3, "title": "טון" }, { "id": 4, "title": "מטר" }], "ingredients": [{ "id": "5d67a432074512ed1a969d57", "inventoryNumber": "273-381-6", "inventoryName": "bis[O,O-bis(2-ethylhexyl)", "casNumber": "68958-92-9", "molecularFormula": "C32H68Mo2O6P2S6" }, { "id": "5d67a432074512ed1a96bd5d", "inventoryNumber": "235-156-0", "inventoryName": "hexacarbonylbis(?5-cyclopenta-2,4-dien-1-yl)", "casNumber": "12091-64-4", "molecularFormula": "C16H10Mo2O6" }, { "id": "5d67a433074512ed1a96fd49", "inventoryNumber": "268-169-5", "inventoryName": "cobalt dimolybdenum nickel octaoxide", "casNumber": "68016-03-5", "molecularFormula": "CoMo2NiO8" }, { "id": "5d67a433074512ed1a96fdf7", "inventoryNumber": "269-841-0", "inventoryName": "hexa[2-[3-(1,3-dihydro-1,3,3-trimethyl-2H-indol-2-ylidene)", "casNumber": "68334-65-6", "molecularFormula": "C25H29N2.1/6Mo24O77Si" }, { "id": "5d67a433074512ed1a972483", "inventoryNumber": "245-322-4", "inventoryName": "dimolybdenum trizinc nonaoxide", "casNumber": "22914-58-5", "molecularFormula": "Mo2O9Zn3" }, { "id": "5d67a433074512ed1a972da2", "inventoryNumber": "265-649-6", "inventoryName": "dihydrogen molybdate, compound with 1,3,5-triazine-2,4,6-triamine (1:1)", "casNumber": "65235-34-9", "molecularFormula": "C3H6N61/2Mo2O7" }] }
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
