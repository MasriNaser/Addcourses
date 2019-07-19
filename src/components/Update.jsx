//@flow
import React, { Component } from 'react';
import { Button, Form, Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default class Update extends Component {
  render() {
    const { defaultValue, onSubmit, onChange } = this.props;
    return (
      <Form onSubmit={onSubmit}>
        <div className='ui focus input'>
          <Input
            type='text'
            placeholder={defaultValue}
            onChange={onChange}
            autoFocus
            required
          />
        </div>
        <Button>update Course</Button>
      </Form>
    );
  }
}
Update.prototypes = {
  defaultValue: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};