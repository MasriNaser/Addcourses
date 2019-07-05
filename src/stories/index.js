import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Addform from '../components/AddForm';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello!!!</Button>)
  .add('with some emoji!!!!!', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
      💯
      </span>
    </Button>
  ));
  storiesOf('Welcome', module).add('to Storybook', () => <Addform showApp={linkTo('Button')} />);
  storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hola!</Button>)
  .add('just to test', () => (
    <Button onClick={action('clicked')}>
      <div>what do u want to do</div>
    </Button>
  ));

  