import React from 'react';
import { shallow } from 'enzyme';
import AddForm from '../components/AddForm';

describe('First React component test with Enzyme', () => {
  let wrapper;
  it('renders without crashing', () => {
    wrapper = shallow(<AddForm />);
  });
});

// import React from 'react'
// import renderer from 'react-test-renderer'
// import Addform from './TodoList'
// test('TodoList renders correctly', ()=>{
//     const component = renderer.create(<Addform />)
//     const tree = component.toJSON()
//     expect(tree).toMatchSnapshot()
// })
