import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from './Button';


test('Button', () => {
  const w1 = shallow(<Button text="hello" />);
  expect(w1.text()).toBe('hello');

  const w2 = mount(<Button text="hello" />);
  expect(w2.text()).toBe('hello');
});

