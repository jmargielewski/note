import React from 'react';
import { ThemeProvider } from 'styled-components';
import { addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import theme from '../src/theme/mainTheme';

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
addDecorator(StoryRouter());
