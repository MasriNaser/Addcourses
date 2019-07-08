import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Update from '../components/Update';

const stories = storiesOf('Update course', module);
stories
  .add('With Text', () => (
    <Update
      onSubmit={action('clicked')}
      defaultValue='placeholder value'
      onChange={action('clicked')}
    />
  ))
  .add('Without text', () => (
    <Update
      onSubmit={action('clicked')}
      defaultValue=''
      onChange={action('clicked')}
    />
  ));
