import React from 'react';
import { shallow } from 'enzyme';
import AddForm from '../components/AddForm';
import toJson from 'enzyme-to-json';

// const updateInput = (wrapper,instance,newValue)=>{
//   const input = wrapper.find(instance);
//   input.simulate('onChange',{
//     currentEmpty:{value:newValue}
//   })
//   return wrapper.find(instance)
// }
// describe('second test',()=>{
//   const wrapper = shallow(<AddForm/>)
//  const nameInput = updateInput(wrapper,'[date-test="inputData"]','name')
//  expect(nameInput.props.value).toBe('name')
//  });

/////
describe('AddForm', () => {
  const onChange = jest.fn().mockName('onChange');
  const wrapper = shallow(<AddForm updateForm={onChange} currentEmpty='' />);
  expect(wrapper.find('Input').exists()).toBe(true);
  it('should have onChange', () => {
    const input = wrapper.find('Input');
    input.simulate('onChange').value = '';
    expect(input.props().value).toEqual('');
  });
});
///

const onClick = jest.fn().mockName('onClick');
const wrapper = shallow(
  <AddForm updateForm={onClick} currentEmpty='' buttonName='' />
);
describe('AddForm component', () => {
  it('should take snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should has Form', () => {
    expect(wrapper.find('Form').exists()).toBe(true);
  });
  it('should has input', () => {
    expect(wrapper.find('Input').exists()).toBe(true);
  });
  it('should has button', () => {
    expect(wrapper.find('Button').exists()).toBe(true);
  });
});
//test if the components is passed to app.js
