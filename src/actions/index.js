import { SET_AUTHENTICATION, INCREMENT_ACTION_COUNT } from './action-types';

export function setAuthentication(isLoggedIn) {
  return {
    type: SET_AUTHENTICATION,
    payload: isLoggedIn
  };
}

export function incrementActionCount() {
  return {
    type: INCREMENT_ACTION_COUNT
  };
}
