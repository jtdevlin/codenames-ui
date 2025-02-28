import React from 'react';
import { shallow } from 'enzyme';
import GameCard from './GameCard';

describe('<GameCard />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<GameCard />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
