import React from 'react';
import Button from 'components/atoms/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

function Root() {
  return (
    <div className="Root">
      <GlobalStyle />
      <Button>Hello</Button>
      <Button secondary>Hello</Button>
    </div>
  );
}

export default Root;
