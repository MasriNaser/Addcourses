import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';
const AddForm = props => {
  const {naarForm,ookNaarForm,currentEmpty} = props
  return (
    <Form onSubmit={ookNaarForm}>
      <input value={currentEmpty} type='text' onChange={naarForm} 
      placeholder='Add a course here...'
      autoFocus
      />
      <Button style={buttonStyle} type='submit'>
        Please add a course
      </Button>
    </Form>
  );
};
//propTypes
AddForm.propTypes = {
  naarForm: PropTypes.func.isRequired,
  currentEmpty: PropTypes.string.isRequired
};
//styling

const buttonStyle = {
  margin: '10px 44%'
};

export default AddForm;
