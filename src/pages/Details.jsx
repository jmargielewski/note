import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import withContext from '../hoc/withContext';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
  max-width: 50vw;
  position: relative;

  @media (max-width: 1200px) {
    max-width: 80vw;
  }
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  :first-letter {
    text-transform: uppercase;
  }
`;

const StyledLink = styled.a`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: black;
  text-transform: uppercase;
  margin: 20px 0 50px;
`;

const StyledImage = styled.img`
  position: absolute;
  right: -80px;
  top: 50px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

class Details extends Component {
  state = {
    activeItem: {
      title: '',
      content: '',
      activeUrl: '',
      twitterName: '',
    },
  };

  componentDidMount() {
    const { activeItem } = this.props;

    if (activeItem) {
      this.setState({ activeItem });
    } else {
      const { match } = this.props;
      const { id } = match.params;

      axios
        .get(`http://localhost:9000/api/note/${id}`)
        .then(({ data }) => this.setState({ activeItem: data }))
        .catch(err => console.log(err));
    }
  }

  render() {
    const { activeItem } = this.state;
    const { pageContext } = this.props;

    return (
      <>
        <StyledWrapper>
          <StyledPageHeader>
            <StyledHeading big as="h1">
              {activeItem.title}
            </StyledHeading>
          </StyledPageHeader>
          <Paragraph>{activeItem.content}</Paragraph>
          {pageContext === 'articles' && (
            <StyledLink href={activeItem.articleUrl}>Open article</StyledLink>
          )}
          {pageContext === 'twitters' && (
            <StyledImage
              alt={activeItem.title}
              href={`https://avatars.io/twitter/${activeItem.twitterName}`}
            />
          )}
          <Button as={Link} to={`/${pageContext}`} activecolor={pageContext}>
            save / close
          </Button>
        </StyledWrapper>
      </>
    );
  }
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }),
  activeItem: PropTypes.shape({
    title: '',
    content: '',
    activeUrl: '',
    twitterName: '',
  }),
  pageContext: PropTypes.string.isRequired,
};

Details.defaultProps = {
  match: {
    params: {
      id: '',
    },
  },
  activeItem: [
    {
      title: '',
      content: '',
      activeUrl: '',
      twitterName: '',
    },
  ],
};

const mapStateToProps = (state, ownProps) => {
  if (state[ownProps.pageContext]) {
    return {
      /* eslint-disable no-underscore-dangle */
      activeItem: state[ownProps.pageContext].find(item => item._id === ownProps.match.params.id),
      /* eslint-enable */
    };
  }
  return null;
};

export default withContext(connect(mapStateToProps)(Details));
