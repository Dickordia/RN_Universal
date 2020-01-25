import {createStore} from 'redux';

const defaultState = {
  login: 'sepivtorak',
  password: 'Portal1!',
  loginSuccess: false,
};

function appStore(state=defaultState, action: { type: any; payload: { login: any; }; }) {
  switch(action.type) {
    case 'LOGIN':
      return {...state,
              login: action.payload.login,
              loginSuccess: true,
            };
    case "LOGOUT":
      return {...state, loginSuccess: false,};
    default:
      return state;
  }
}

export default createStore(appStore);
