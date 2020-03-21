import React from 'react';
import PropTypes from 'prop-types';
import UserPageTemplate from './UserPageTemplate';

const DetailsTemplate = ({ children }) => {
  return <UserPageTemplate>{children}</UserPageTemplate>;
};

DetailsTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default DetailsTemplate;
