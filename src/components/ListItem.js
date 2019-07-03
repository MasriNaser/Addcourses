import React, { Component } from 'react';
import { Button, List, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
class ListItem extends Component {
  state = {
    isEdit: false,
    courses: this.props.courses
  };
  //textInput = React.createRef(); if u want to use another way for ref

  // render course item
  renderCourse = () => {
    return (
      <List divided verticalAlign='middle'>
        <List.Item>
          <List.Content floated='right'>
            <Button
              onClick={() => {
                this.props.naarList(this.props.index);
              }}
            >
              Delete
            </Button>
          </List.Content>
          <List.Content floated='right'>
            <Button
              onClick={() => {
                this.toggleState();
              }}
            >
              Edit
            </Button>
          </List.Content>
          <List.Content>
            <Header>{this.props.details.name}</Header>
          </List.Content>
        </List.Item>
      </List>
    );
  };
  // toggleState
  toggleState = () => {
    let test = this.state.isEdit;
    this.setState({
      isEdit: !test
    });
  };
  // updateCourseItem
  updateCourseItem = e => {
    e.preventDefault();
    this.props.editCourseNaarList(this.props.index, this.input.value);
    this.toggleState();
  };
  //method for update
  renderUpdateEdit = () => {
    return (
      <form onSubmit={this.updateCourseItem}>
        <div className='ui focus input'>
          <input
            ref={v => {
              this.input = v;
            }}
            defaultValue={this.props.details.name}
            type='text'
            placeholder='Edit your course...'
            autoFocus
            required
          />
        </div>
        <Button>update Course</Button>
      </form>
    );
  };
  //if isEdit is true render the edit method otherwise render list component
  render() {
    return (
      <React.Fragment>
        {this.state.isEdit ? this.renderUpdateEdit() : this.renderCourse()}
      </React.Fragment>
    );
  }
}
// propTypes
ListItem.prototypes = {
  renderUpdateEdit: PropTypes.func.isRequired,
  renderCourse: PropTypes.func.isRequired,
  isEdit: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
export default ListItem;
