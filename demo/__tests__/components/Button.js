import React from 'react';
import { mount } from 'enzyme';
import Button from '../../src/components/Button';


test('Button', () => {
  const wrapper = mount(
    <Button text="hello" />
  );

  expect(wrapper.text()).toBe('hello');
});
