import FormStore from './FormStore'

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    formStore: FormStore,
});

export default rootReducer;