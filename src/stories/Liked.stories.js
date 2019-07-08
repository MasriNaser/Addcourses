import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Liked from '../components/Liked';
import 'semantic-ui-css/semantic.min.css';

const stories = storiesOf('Liked', module);
stories.add('with Text', () => (
  <Liked count='number' 
  addLike={action('clicked')} 
  unLike={action('clicked')} />
));

