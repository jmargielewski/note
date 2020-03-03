import React from 'react';
import styled from 'styled-components';

import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import plusIcon from 'assets/icons/plus.svg';
import twitterIcon from 'assets/icons/twitter.svg';

import ButtonIcon from './ButtonIcon';

export default {
  component: ButtonIcon,
  title: 'Atoms/ButtonIcon',
  decorators: [story => <YellowBackground>{story()}</YellowBackground>],
};

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.note};
`;

export const bulb = () => <ButtonIcon icon={bulbIcon} />;
export const logoutActive = () => <ButtonIcon active icon={logoutIcon} />;
export const pen = () => <ButtonIcon icon={penIcon} />;
export const plus = () => <ButtonIcon icon={plusIcon} />;
export const twitter = () => <ButtonIcon icon={twitterIcon} />;
