import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from '../components/todo-app';
import { shallow } from 'enzyme';

describe('TodoApp', () => {
  it('render component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TodoApp />, div);
  });
});
