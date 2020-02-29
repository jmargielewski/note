import React from 'react';
import { action } from '@storybook/addon-actions';
import Paragraph from './Paragraph';

export default {
  component: Paragraph,
  title: 'Paragraph',
};

export const big = () => <Paragraph onClick={action('clicked')}>Paragraph</Paragraph>;
