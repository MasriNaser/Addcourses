//@flow
import React from 'react';
import { Dimmer, Loader as Spinner } from 'semantic-ui-react';

const Loader = () => (
  <Dimmer active inverted>
    <Spinner inverted content='Loading' />
  </Dimmer>
);

export default Loader;
