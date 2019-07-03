import React from 'react';
import { shallow } from 'enzyme';
import ListItem from '../components/ListItem';

describe('First React component test with Enzyme', () => {
  let wrapper;
  it('renders without crashing', () => {
    wrapper = shallow(<ListItem details={name} />);
  });
});
