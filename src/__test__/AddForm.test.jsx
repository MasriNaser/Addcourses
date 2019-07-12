import React from 'react';
import { shallow } from 'enzyme';
import AddForm from '../components/AddForm';
import toJson from 'enzyme-to-json';

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
    expect(wrapper.find('input').exists()).toBe(true);
  });
  it('should has button', () => {
    expect(wrapper.find('Button').exists()).toBe(true);
  });
});
//test if the components is passed to app.js
