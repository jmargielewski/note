import React from 'react';
import { ThemeProvider } from 'styled-components';
import { addDecorator } from '@storybook/react';
import theme from '../src/theme/mainTheme';

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
