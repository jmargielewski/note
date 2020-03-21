import React from 'react';
import PropTypes from 'prop-types';
import UserPageTemplate from './UserPageTemplate';

const DetailsTemplate = ({ children, pageType }) => {
  return <UserPageTemplate pageType={pageType}>{children}</UserPageTemplate>;
};

DetailsTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']).isRequired,
};
export default DetailsTemplate;
