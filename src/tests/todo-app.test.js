import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from '../components/todo-app';
import { shallow } from 'enzyme';

describe('TodoApp', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TodoApp />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('render component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TodoApp />, div);
  });

  it('contains string "Nouvelle Tâche"', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TodoApp />, div);
    expect(div.innerHTML).toContain('Nouvelle tâche');
  });

  it('render component with shallow', () => {
    expect(wrapper.html()).toContain('Nouvelle tâche');
    expect(wrapper.html()).not.toContain('Nouvelle toche');
  });

  it('contains 2 row classes', () => {
    expect(wrapper.find('.row').length).toEqual(2);
    expect(wrapper.find('.row').length).not.toEqual(3);
  });

  it('change input value', () => {
    wrapper.find('input').simulate('change', {
      target: { value: 'yo' }
    });

    expect(wrapper.find('input').prop('value')).toEqual('yo');
    expect(wrapper.find('input').prop('value')).not.toEqual('ya');
  });

  it('add task', () => {
    wrapper.find('input').simulate('change', {
      target: { value: 'yo' }
    });

    wrapper.find('button').simulate('click');

    expect(wrapper.find('.list-group-item').text()).toContain('yo');
    expect(wrapper.find('.list-group-item').text()).not.toContain('ya');
  });
});
