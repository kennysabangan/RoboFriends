import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header';

it('renders Header without crashing', () => {
  expect(shallow(<Header />)).toMatchSnapshot()
})

