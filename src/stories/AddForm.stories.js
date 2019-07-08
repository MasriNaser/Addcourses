import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import AddForm from '../components/AddForm';

const stories = storiesOf('AddForm', module);
stories
  .add('With Text', () => (
    <AddForm
      naarForm={() => {}}
      currentEmpty='Anything'
      buttonName='Anything'
    />
  ))
  .add('Without text', () => (
    <AddForm naarForm={() => {}} currentEmpty='' buttonName='' />
  ));
