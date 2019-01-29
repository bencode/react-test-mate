import React from 'react';
import { mount } from 'enzyme';
import Hello from '../src/Hello';


test('test', () => {
  const wrapper = mount(<Hello />);
  const evt = { target: { value: 'hello world' } };
  wrapper.find('input[type="text"]').simulate('change', evt);
  expect(wrapper.state('text')).toBe('hello world');
  expect(wrapper.find('.text').text()).toBe('hello world');
});
