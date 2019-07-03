import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';
const AddForm = props => {
  return (
    <Form onSubmit={props.ookNaarForm}>
      <input value={props.currentEmpty} type='text' onChange={props.naarForm} />
      <Button style={buttonStyle} type='submit'>
        Add a course:)
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
