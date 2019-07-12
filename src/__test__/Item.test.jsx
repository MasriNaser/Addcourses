import React from 'react';
import { shallow } from 'enzyme';
import Item from '../components/Item';
import toJson from 'enzyme-to-json';

const onDelete = jest.fn().mockName('onDelete');
const onEdit = jest.fn().mockName('onEdit');
const wrapper = shallow(<Item updateForm={onDelete} name='' onEdit={onEdit} />);
describe('Item component', () => {
  it('should take snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should has Form', () => {
    expect(wrapper.find('List').exists()).toBe(true);
  });
  it('should has Button', () => {
    expect(wrapper.find('Button').exists()).toBe(true);
  });
  it('should has Liked component',()=>{
    expect(wrapper.find('Liked').exists()).toBe(true)
  })
});
