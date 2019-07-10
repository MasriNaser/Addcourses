import React from 'react';
import { shallow } from 'enzyme';
import AddForm from '../components/AddForm';

//using data attribute
const findByTestAttribute = (component, attribute) => {
  const wrapper = component.find(`[data-test='${attribute}']`);
  return wrapper;
};
//setUp
const setUp = (props={})=>{
  const component = shallow(<AddForm {...props}/> );
    return component
};

describe('addform', ()=>{
  describe("have props",()=>{
    let wrapper;
    beforeEach(()=>{
      const props={
        updateForm: 'test'
      };
      wrapper= setUp(props);
    });
    it('should render',()=>{
      const component = findByTestAttribute(wrapper, 'dataForm');
      expect(component.length).toBe(1)
    });
    it("should render",()=>{
      const input =findByTestAttribute(wrapper,'inputData');
      expect(input.length).toBe(1)
    });
    it('should render',()=>{
      const button = findByTestAttribute(wrapper,'buttonData');
      expect(button.length).toBe(1)
    })
  });
  describe('have no props',()=>{
    let wrapper;
    beforeEach(()=>{
      wrapper=setUp();
    });
    it('should Not render',()=>{
      const component = findByTestAttribute(wrapper,'dataForm');
      expect(component.length).toBe(0)
    })

  });
});

// import React from 'react'
// import renderer from 'react-test-renderer'
// import Addform from './TodoList'
// test('TodoList renders correctly', ()=>{
//     const component = renderer.create(<Addform />)
//     const tree = component.toJSON()
//     expect(tree).toMatchSnapshot()
// })
