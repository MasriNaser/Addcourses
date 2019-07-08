import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Item from '../components/Item';
import 'semantic-ui-css/semantic.min.css';

const stories = storiesOf('Item', module);
stories.add('with Text', () => (
  <Item name='anythihg to type' 
  onEdit={action('clicked')} 
  onDelete={() => {}} />
));
