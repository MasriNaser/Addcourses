import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('First React component test with Enzyme', () => {
  let wrapper = shallow(<App />);

  it('renders without crashing', () => {
    mount(<App />);
  });
});

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
