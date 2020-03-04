import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organism/Sidebar/Sidebar';

const UserPageTemplate = ({ children, pageType }) => (
  <>
    <Sidebar pageType={pageType} />
    {children}
  </>
);

UserPageTemplate.propTypes = {
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

UserPageTemplate.defaultProps = {
  pageType: 'notes',
};

export default UserPageTemplate;
