import React from 'react';
import { shallow } from 'enzyme';
import Prompt from './Prompt';

describe('<Prompt />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Prompt />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
