import React from 'react';
import { shallow } from 'enzyme';
import App from './App';



// see the outout
// describe('App coomonent', () => {
//   it('should render', () => {
//     const wrapper = shallow(<App />);
//     console.log(wrapper.debug());
//   });
// });
//using data attribute
const findByTestAttribute = (component, attribute) => {
  const wrapper = component.find(`[data-test='${attribute}']`);
  return wrapper;
};
//refactoring
const setUp = (props = {}) => {
  const component = shallow(<App {...props} />);
  return component;
};

//10-07-2019
//it() or test() both method are almost the same.
//it works
// it('it should render without errors', () => {
//   expect(1).toBe(3);
// });
//you can add describe and nasted describe
// describe('App Component', ()=>{
//   describe('nasted',()=>{
//     it('it should render without errors', () => {
//       expect(3).toBe(3);
//       });
//   })
// })
//to test by using shallow
//beforeEach it runs before every single test
//data-test is attribute instead of className
describe('App Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it('It should find container', () => {
    //const component = setUp();//copy of component
    // console.log(component.debug());
    const wrapper = findByTestAttribute(component, 'container'); // grabbing the shallow and searching for that className
    expect(wrapper.length).toBe(0); //at least one
  });
  it('should render a ', () => {
    //const component = setUp();
    const wrapper = findByTestAttribute(component, 'headerCourse');
    expect(wrapper.length).toBe(0);
  });
  it("contains correct text", ()=>{
    const wrapper = findByTestAttribute(component,'[currentEmpty="something]');
    expect(wrapper.text()).toBe('name')
  });
  it('snapshot',()=>{
    expect(component).toMatchSnapshot()
  })

});

// it('rednder correctly', () => {
//   const wrapper = shallow(<App current='' show={true} course={[]} />);
//   expect(wrapper).toMatchSnapshot();
// });
// it('render our courses', () => {
//   const wrapper = shallow(<App />);
//   const ourCourses = <App size='large'>our courses</App>;
//   expect(wrapper.contains('our courses')).toEqual(true);
// });
