import { combineReducers } from 'redux';

import AuthenticationReducer from './authentication';
import ActionInfoReducer from './actionInfo';

const rootReducer = combineReducers({
  authentication: AuthenticationReducer,
  actionInfo: ActionInfoReducer
});

export default rootReducer;
