import React from 'react';
import Card from './Card';

export default {
  component: Card,
  title: 'Molecules/Card',
};

export const note = () => <Card />;
export const twitter = () => <Card cardType="twitter" />;
export const article = () => <Card cardType="article" />;
