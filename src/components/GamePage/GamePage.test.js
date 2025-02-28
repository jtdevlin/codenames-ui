import React from 'react';
import { shallow } from 'enzyme';
import GamePage from './GamePage';

describe('<GamePage />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<GamePage />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
