import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../components/organism/Sidebar/Sidebar';

const UserPageTemplate = ({ children, pageType }) => (
  <>
    <Sidebar pageType={pageType} />
    {children}
  </>
);

UserPageTemplate.propTypes = {
  pageType: PropTypes.oneOf(['note', 'twitter', 'article']),
  children: PropTypes.element.isRequired,
};

UserPageTemplate.defaultProps = {
  pageType: 'note',
};

export default UserPageTemplate;
