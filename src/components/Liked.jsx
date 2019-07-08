import React, { Component } from 'react';
import { Button, List, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
export default class Liked extends Component {
    state = {
      count: 0
    };
  addLike = () => {
    if(this.state.count === 0){
      return this.setState({
        count: this.state.count + 1
      });
    }else{
      return alert('you have already liked...you can unlike')
    }
  };
  unLike = () => {
    if(this.state.count === 0){
      return alert('it has already no like!')
    }else{
     return  this.setState({
        count: 0
      });
    }
  };
  render() {
    return (
      <div>
        <Button  onClick={this.addLike}>
          Like!
        </Button>
        <Button  onClick={this.unLike}>
          Unlike
        </Button>
        <List>
        <List.Content floated='right'><Icon disabled name='heart' size='big'/>{this.state.count}</List.Content>
        </List>
      </div>
    );
  }
}
Liked.prototypes = {
  count: PropTypes.number,
  addLike: PropTypes.func.isRequired,
  unLike: PropTypes.func.isRequired
};
