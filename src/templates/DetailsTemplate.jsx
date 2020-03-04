import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
// import styled from 'styled-components';
import UserPageTemplate from './UserPageTemplate';

const DetailsTemplate = ({ children }) => {
  return (
    <UserPageTemplate>
      {children}
      <Link to="/">go back</Link>
    </UserPageTemplate>
  );
};

DetailsTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};
export default DetailsTemplate;
