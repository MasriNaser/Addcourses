import React, { Component } from 'react';
import './App.css';
import AddForm from './components/AddForm';
import ListItem from './components/ListItem';
import { Container, Header, Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import { storage } from './components/FireStore';
//init constructor with fixed state

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      courses: [{ name: 'html' }, { name: 'java' }, { name: 'c#' }],
      current: ''
    };
  }
  componentDidMount() {
    console.log(firebase);
    let test = storage.collection('courses');
    test.get().then(snapshot => {
      console.log(snapshot.docs);
    });
    console.log(test);
  }
  // git the value for updateCourse
  updateCourse = e => {
    this.setState({
      current: e.target.value
    });
  };
  //method for add a course
  addCourse = e => {
    e.preventDefault();
    let getCurrent = this.state.current; //git the value from the state
    if (getCurrent === '') {
      alert('please add a course'); //show me an error message if the input is empty
      return false;
    } else {
      let allCourses = this.state.courses; //copy of the all courses names (array)
      allCourses.push({ name: getCurrent }); // push one attribute to allCourses
      this.setState({
        cousers: allCourses, //update the state
        current: '' // then make the input empty
      });
    }
    //e.currentTarget.reset(); //to rest the input but it did not work!
  };
  //method to delete a course from an array
  deletCourse = index => {
    let allCourses = this.state.courses; // copy from state
    allCourses.splice(index, 1); //delete on element from an array by using index as an id (not a good way but...)
    this.setState({
      courses: allCourses //update state
    });
  };
  // method to edit a course, pass two parameters
  editCourse = (index, value) => {
    let allCourses = this.state.courses; //copy from state
    let coursesIndex = allCourses[index]; // copy of one element {name: value}
    coursesIndex['name'] = value; // save the new value
    this.setState({
      courses: allCourses //update state
    });
  };

  //render two components, listitem && addform
  render() {
    let copySate = this.state.courses; //copy from state
    let list = copySate.map((i, index) => {
      //map throw list
      return (
        <ListItem
          details={i}
          key={index}
          naarList={this.deletCourse} //send delete method to list as props
          index={index}
          editCourseNaarList={this.editCourse} //send edit method to list as props
          courses={this.state.courses} //send courses as props
        />
      );
    });
    return (
      <Container>
        <Header style={headerStyle} size='large'>
          our courses
        </Header>
        <AddForm
          naarForm={this.updateCourse} //send updateCourse as props to AddForm component
          ookNaarForm={this.addCourse} //send addCourse as props to AddForm component
          currentEmpty={this.state.current} //send current as props to AddForm component
        />
        <ul style={holderList}>
          {this.state.courses.length === 0 && (
            <Message info>
              <Message.Header>There is no courses...Add new one</Message.Header>
            </Message>
          )}
          {this.state.courses.length !== 0 && list}
        </ul>
      </Container>
      //if there is no courses render a message otherwise render the list
    );
  }

  // styling
}
const headerStyle = {
  margin: '10px auto',
  border: '1px solid black',
  borderRadius: '3px',
  color: '#1E90FF',
  textAlign: 'center',
  padding: '10px',
  textTransform: 'uppercase'
};
const holderList = {
  border: '1px solid black',
  borderRadius: '3px',
  backgroundColor: '#87CEEB',
  padding: '10px'
};

//protoTypes
App.propTypes = {
  show: PropTypes.bool,
  courses: PropTypes.array,
  current: PropTypes.string
};

export default App;
