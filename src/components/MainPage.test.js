import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  }
  wrapper = shallow(<MainPage {...mockProps} />)
})

it('renders MainPage without crashing', () => {
  expect(wrapper).toMatchSnapshot()
})

// Cannot test methods of functional components with Enzyme
it('filters robots correctly', () => {
  const mockProps1 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'John',
    }],
    searchField: 'J',
    isPending: false
  }
  expect(wrapper.instance().filterRobots()).toEqual([])

  let wrapper2 = shallow(<MainPage {...mockProps1} />)
  expect(wrapper2.instance().filterRobots().length).toEqual(1)
})

