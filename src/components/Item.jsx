import React, { Component } from 'react';
import { List, Button, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
export default class Item extends Component {
  render() {
    const { name, onDelete, onEdit } = this.props;
    return (
      <List divided verticalAlign='middle'>
        <List.Item>
          <List.Content floated='right'>
            <Button onClick={onDelete}>Delete</Button>
          </List.Content>
          <List.Content floated='right'>
            <Button onClick={onEdit}>Edit</Button>
          </List.Content>
          <List.Content>
            <Header>{name}</Header>
          </List.Content>
        </List.Item>
      </List>
    );
  }
}
Item.prototypes = {
  name: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
};
