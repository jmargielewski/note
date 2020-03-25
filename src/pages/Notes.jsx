import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from 'components/molecules/Card/Card';

const Notes = ({ notes }) => {
  return (
    <>
      {notes.map(({ _id: id, title, content }) => (
        <Card key={title} id={id} title={title} content={content} />
      ))}
    </>
  );
};

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};

Notes.defaultProps = {
  notes: [],
};

const mapStateToProps = ({ notes }) => ({ notes });

export default connect(mapStateToProps)(Notes);
