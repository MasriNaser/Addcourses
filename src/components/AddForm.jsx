//@flow
import React from 'react';
import { Button, Form, Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';
const AddForm = props => {
  const { updateForm, submitForm, currentEmpty, buttonName } = props;
  return (
    <Form date-test="dataForm" onSubmit={submitForm}>
     <Input
      icon='add'
      date-test="inputData"
      value={currentEmpty}
      type='text'
      onChange={updateForm}
      placeholder='Add a course here...'
      autoFocus
      />      
      <Button data-test='buttonData' style={buttonStyle} type='submit'>
        {buttonName}
      </Button>
    </Form>
  );
};
//propTypes
AddForm.propTypes = {
  updateForm: PropTypes.func.isRequired,
  currentEmpty: PropTypes.string.isRequired,
  buttonName: PropTypes.string
};
AddForm.defaultProps = {
  buttonName: 'Please add a course'
};
//styling

const buttonStyle = {
  margin: '10px 25%',
  width: '50%'
};

export default AddForm;
