import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import toJson from 'enzyme-to-json';

//see the out put
describe('App component', () => {
  it('should render', () => {
    const wrapper = shallow(<App />);
    console.log(wrapper.debug());
  });
});
///
describe('App component', () => {
  const wrapper = shallow(<App loader={false}/>);
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
