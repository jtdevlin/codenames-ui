import React from 'react';
import { shallow } from 'enzyme';
import PlayerModal from './PlayerModal';

describe('<PlayerModal />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<PlayerModal />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
