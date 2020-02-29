import React from 'react';
import { action } from '@storybook/addon-actions';
import Heading from './Heading';

export default {
  component: Heading,
  title: 'Heading',
};

export const big = () => <Heading onClick={action('clicked')}>Heading</Heading>;
