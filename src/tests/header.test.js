import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import { SET_AUTHENTICATION } from '../actions/action-types';
import { setAuthentication } from '../actions';
import Header from '../containers/header';
import AuthenticationReducer from '../reducers/authentication';
import reducers from '../reducers';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

describe('Header', () => {
  it('render correctly', () => {
    const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
    const wrapper = shallow(
      <Provider store={createStoreWithMiddleware(reducers)}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );
  });
});
