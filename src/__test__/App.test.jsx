import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import toJson from 'enzyme-to-json';

//see the out put
const state = {
  show: false,
  courses: [],
  current: '',
  loader: false
};
describe('App component', () => {
  it('should render', () => {
    const wrapper = shallow(<App state={state} />);
    console.log(wrapper.debug());
  });
});
//test if the components is passed to app.js
describe('App component', () => {
 
  const wrapper = shallow(<App state={state}/>);
  it('should take snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render Title as First Child', () => {
    expect(wrapper.find('Title').exists()).toBe(true);
  });
  it('should has Container', () => {
    expect(wrapper.find('Container').exists()).toBe(true);
  });
  it('should has AddForm', () => {
    expect(wrapper.find('AddForm').exists()).toBe(true);
  });
  it('should has ul', () => {
    expect(wrapper.find('ul').exists()).toBe(true);
  });
  it('should has MessageError as default', () => {
    expect(wrapper.find('MessageError').exists()).toBe(true);
  });
});
