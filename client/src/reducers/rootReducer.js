import { combineReducers } from 'redux';
import formReducer from './formReducer';
import viewReducer from './viewReducer';

const rootReducer = combineReducers({
    form: formReducer,
    view: viewReducer
});

export default rootReducer;