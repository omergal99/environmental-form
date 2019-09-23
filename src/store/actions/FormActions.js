import FormService from '../../services/FormService';

function loadFormData() {
  return async (dispatch) => {
    const formInitData = await FormService.getFormData();
    dispatch({ type: 'setFormData', payload: formInitData })
  }
}

function updateDataFromAPI() {
  return async (dispatch) => {
    const APIData = await FormService.getDataFromAPI();
    dispatch({ type: 'setAPIFormData', payload: APIData })
  }
}

function doesItError(sections) {
  return () => {
    return FormService.doesItError(sections);
  }
}
function levelUp() {
  return async (dispatch) => {
    dispatch({ type: 'levelUp' })
  }
}
function levelByArg(num) {
  return async (dispatch) => {
    dispatch({ type: 'levelByArg', payload: num })
  }
}
function levelDown() {
  return async (dispatch) => {
    dispatch({ type: 'levelDown' })
  }
}

export default {
  loadFormData,
  levelUp,
  levelDown,
  doesItError,
  updateDataFromAPI,
  levelByArg
}