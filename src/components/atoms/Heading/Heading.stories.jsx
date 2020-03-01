import React from 'react';
import Heading from './Heading';

export default {
  component: Heading,
  title: 'Heading',
};

export const normal = () => <Heading>Heading</Heading>;
export const big = () => <Heading big>Heading</Heading>;
