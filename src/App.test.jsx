import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import { exportAllDeclaration } from '@babel/types';

it('rednder correctly', () => {
  const wrapper = shallow(<App current='' show={true} course={[]} />);
  expect(wrapper).toMatchSnapshot();
});
it('render our courses', () => {
  const wrapper = shallow(<App />);
  const ourCourses = <App size='large'>our courses</App>;
  expect(wrapper.contains('our courses')).toEqual(true);
});

// describe('First React component test with Enzyme', () => {
//   it('renders without crashing', () => {
//     mount(<App current='' show={true} course={[]} />);
//   });
// });

/**
 * show: PropTypes.bool,
  courses: PropTypes.array,
  current: PropTypes.string
 */

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
