import React from 'react';
import { shallow } from 'enzyme';
import Update from '../components/update';
import toJson from 'enzyme-to-json';

const onDelete = jest.fn().mockName('onDelete');
const onEdit = jest.fn().mockName('onEdit');
const wrapper = shallow(<Update updateForm={onDelete} name='' onEdit={onEdit} />);
describe('updateForm component', () => {
  it('should take snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should has Form', () => {
    expect(wrapper.find('Form').exists()).toBe(true);
  });
  it('should has input', () => {
    expect(wrapper.find('input').exists()).toBe(true);
  });
  it('should has Button', () => {
    expect(wrapper.find('Button').exists()).toBe(true);
  });
  
});
