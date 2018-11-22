import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

import '../src/sass/styles.scss'
import View from '../src/components/View'

storiesOf('Welcome', module)
  .add('Description', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('View', () => (
    <View />
  ))

