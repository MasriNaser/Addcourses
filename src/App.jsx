import React, { Component } from 'react';
import './App.css';
import AddForm from './components/AddForm';
import ListItem from './components/ListItem';
import { Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import { storage } from './components/FireStore';
import Loader from './components/Loader';
import MessageError from './components/MessageError';
import Title from './components/Title';
//init constructor with fixed state

class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.state
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loader: false }), 700);
    //console.log(firebase);
    let test = storage.collection('courses');
    test.get().then(snapshot => {
      snapshot.docs.forEach(doc => {
        // console.log(doc.data())
      });
    });
    //console.log(test);
  }
  //git the value for updateCourse
  updateCourse = e => {
    this.setState({
      current: e.target.value
    });
  };
  //method for add a course
  addCourse = e => {
    e.preventDefault();
    this.setState({show:true})
    let getCurrent = this.state.current; //git the value from the state
    if (getCurrent === '') {
      alert('please add a course'); //show me an error message if the input is empty
      return false;
    } else {
      let allCourses = this.state.courses; //copy of the all courses names (array)
      allCourses.push({ name: getCurrent }); // push one attribute to allCourses
      this.setState({
        courses: allCourses, //update the state
        current: '',
         // then make the input empty
      });
    }
    //e.currentTarget.reset(); //to rest the input but it did not work!
  };
  //method to delete a course from an array
  deleteCourse = index => {
    if (window.confirm('Are you sure that you want to delete it?')) {
      let allCourses = this.state.courses; // copy from state
      allCourses.splice(index, 1); //delete on element from an array by using index as an id (not a good way but...)
      this.setState({
        courses: allCourses //update state
      });
    }
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

  renderList = () =>
    this.state.courses.map((i, index) => {
      //map throw list
      return (
        <ListItem
          details={i}
          key={index}
          ToList={this.deleteCourse} //send delete method to list as props
          index={index}
          editCourseList={this.editCourse} //send edit method to list as props
          courses={this.state.courses} //send courses as props
        />
      );
    });
  //render two components, renderList && addform
  render() {
    const { courses, loader } = this.state;
    if (loader) {
      return <Loader />;
    }
    return (
      <Container data-test='container'>
        <Title />
        <AddForm
          updateForm={this.updateCourse} //send updateCourse as props to AddForm component
          submitForm={this.addCourse} //send addCourse as props to AddForm component
          currentEmpty={this.state.current} //send current as props to AddForm component
        />
        <ul style={holderList}>
          {courses.length === 0 ? (
            <MessageError message='there is no courses...add a new one!' />
          ) : (
            this.renderList()
          )}
        </ul>
      </Container>
      //if there is no courses render a message otherwise render the list
    );
  }
  // styling
}
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
