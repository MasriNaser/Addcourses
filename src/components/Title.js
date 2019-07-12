import React from 'react';
import { Header } from 'semantic-ui-react';
/**
 * @author
 * @function Header
 **/

const Title = props => {
  return (
    <Header data-test='headerCourse' style={headerStyle} size='large'>
      our courses
    </Header>
  );
};
const headerStyle = {
  margin: '10px auto',
  border: '1px solid black',
  borderRadius: 3,
  color: '#1E90FF',
  textAlign: 'center',
  padding: 10,
  textTransform: 'uppercase'
};
export default Title;
