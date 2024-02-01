import counterReducer from './counter';
import loginReducer from './isLogged';
import { combineReducers } from 'redux';

const allRedcuers = combineReducers({
    counter: counterReducer,
    isLogged: loginReducer,
});

export default allRedcuers;