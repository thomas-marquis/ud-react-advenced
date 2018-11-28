import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from '../components/todo-app';
import { shallow } from 'enzyme';

describe('TodoApp', () => {
  // it('render component', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<TodoApp />, div);
  // });
  //
  // it('contains string "Nouvelle Tâche"', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<TodoApp />, div);
  //   expect(div.innerHTML).toContain('Nouvelle tâche');
  // });

  it('render component with shallow', () => {
    const wrapper = shallow(<TodoApp />);
    expect(wrapper.html()).toContain('Nouvelle tâche');
    expect(wrapper.html()).not.toContain('Nouvelle toche');
  });

  it('contains 2 row classes', () => {
    const wrapper = shallow(<TodoApp />);
    expect(wrapper.find('.row').length).toEqual(2);
    expect(wrapper.find('.row').length).not.toEqual(3);
  });
});
