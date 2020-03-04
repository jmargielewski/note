import React from 'react';
import Card from './Card';

export default {
  component: Card,
  title: 'Molecules/Card',
};

export const notes = () => <Card />;
export const twitters = () => <Card cardType="twitters" />;
export const articles = () => <Card cardType="articles" />;
