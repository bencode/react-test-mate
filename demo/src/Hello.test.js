import React from 'react';
import { mount } from 'enzyme';

import Hello from './Hello';

test('Hello', () => {
  const node = mount(<Hello />);
  expect(node.find('.text')).toHaveLength(1);
  expect(node.state('text')).toBe('');
  node.find('input').simulate('change', { target: { value: 'hello' } });
  expect(node.find('.text').text()).toBe('hello');
});
