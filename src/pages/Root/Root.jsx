import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';
import theme from 'theme/mainTheme';

function Root() {
  return (
    <div className="Root">
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <Button>Hello</Button>
          <Button secondary>Hello</Button>
        </>
      </ThemeProvider>
    </div>
  );
}

export default Root;
