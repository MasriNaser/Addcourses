import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import Update from './Update';

class ListItem extends Component {
  state = {
    isEdit: false,
    courses: this.props.courses,
    inputValue: ''
  };
  //textInput = React.createRef(); another way for ref

  // render course item
  renderCourse = () => {
    return (
      <Item
        name={this.props.details.name}
        onEdit={() => this.toggleState()}
        onDelete={() => this.props.ToList(this.props.index)}
      />
    );
  };
  // toggleState
  toggleState = () => {
    let copyEdit = this.state.isEdit;
    this.setState({
      isEdit: !copyEdit
    });
  };
  // updateCourseItem
  updateCourseItem = e => {
    e.preventDefault();
    this.props.editCourseList(this.props.index, this.state.inputValue);
    this.toggleState();
  };
  inputOnChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };
  //method for update
  renderUpdateEdit = () => {
    return (
      <Update
        onSubmit={this.updateCourseItem}
        defaultValue={this.props.details.name}
        onChange={this.inputOnChange}
      />
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
  name: PropTypes.string.isRequired
};
export default ListItem;
