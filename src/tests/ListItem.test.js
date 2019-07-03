import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './App';
describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    // shallow(<ListItem />);
  });
});

// import React from 'react'
// import renderer from 'react-test-renderer'
// import ListItem from './TodoList'
// test('TodoList renders correctly', ()=>{
//     const component = renderer.create(<ListItem />)
//     const tree = component.toJSON()
//     expect(tree).toMatchSnapshot()
// })

// describe('Examining the syntax of Jest tests', () => {
//   it('sums numbers', () => {
//     expect(1 + 2).toEqual(3);
//     expect(2 + 2).toEqual(5);
//   });
// });
