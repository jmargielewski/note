import React from 'react';
import { action } from '@storybook/addon-actions';
import { select, withKnobs } from '@storybook/addon-knobs';
import Button from './Button';

const label = 'Colors';
const options = {
  Primary: 'hsl(49, 100%, 58%)',
  Secondary: 'hsl(196, 83%, 75%)',
  Tertiary: 'hsl(106, 47%, 64%)',
};
const defaultValue = 'hsl(49, 100%, 58%)';
const groupId = 'GROUP-ID1';

const value = select(label, options, defaultValue, groupId);

export default {
  component: Button,
  title: 'Atoms/Button',
  decorators: [withKnobs],
};

export const primary = () => (
  <Button activecolor="notes" color={value} onClick={action('clicked')}>
    Hello Button
  </Button>
);
export const secondary = () => (
  <Button activecolor="notes" secondary onClick={action('clicked')}>
    Hello Button
  </Button>
);

export const note = () => (
  <Button activecolor="notes" color={value} onClick={action('clicked')}>
    Hello Button
  </Button>
);

export const twitter = () => (
  <Button activecolor="twitters" color={value} onClick={action('clicked')}>
    Hello Button
  </Button>
);

export const article = () => (
  <Button activecolor="articles" color={value} onClick={action('clicked')}>
    Hello Button
  </Button>
);
