import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from 'components/molecules/Card/Card';

const Articles = ({ articles }) => {
  return (
    <>
      {articles.map(({ _id: id, title, content, articleUrl }) => (
        <Card key={title} id={id} title={title} content={content} articleUrl={articleUrl} />
      ))}
    </>
  );
};

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      articleUrl: PropTypes.string.isRequired,
    }),
  ),
};

Articles.defaultProps = {
  articles: [],
};

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps)(Articles);
