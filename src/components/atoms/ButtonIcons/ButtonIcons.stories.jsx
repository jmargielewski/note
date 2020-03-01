import React from 'react';
import bulbIcon from 'assets/icons/bulb.svg';
import ButtonIcon from './ButtonIcon';

export default {
  component: ButtonIcon,
  title: 'ButtonIcon',
};

export const normal = () => <ButtonIcon icon={bulbIcon} />;
