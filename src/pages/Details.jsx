import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import routes from '../routes';

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

const StyledParagraph = styled(Paragraph)`
  margin: 25px 0 0 0;

  font-weight: ${({ theme }) => theme.bold};
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
  state = { pageType: 'notes' };

  componentDidMount() {
    const { match } = this.props;

    switch (match.path) {
      case routes.twitter:
        this.setState({ pageType: 'twitters' });
        break;
      case routes.note:
        this.setState({ pageType: 'notes' });
        break;
      case routes.article:
        this.setState({ pageType: 'article' });
        break;
      default:
        this.setState({ pageType: 'notes' });
    }
  }

  render() {
    // const { match, title, created, content, twitterName, articleUrl } = this.props;
    const { pageType } = this.state;

    const dummyArticle = {
      id: 1,
      title: 'React on my mind',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      articleUrl: 'https://youtube.com',
      created: '1 day',
    };

    return (
      <>
        <StyledWrapper>
          <StyledPageHeader>
            <StyledHeading big as="h1">
              {dummyArticle.title}
            </StyledHeading>
            <StyledParagraph>{dummyArticle.created}</StyledParagraph>
          </StyledPageHeader>
          <Paragraph>{dummyArticle.content}</Paragraph>
          {pageType === 'articles' && (
            <StyledLink href={dummyArticle.articleUrl}>Open article</StyledLink>
          )}
          {pageType === 'twitters' && (
            <StyledImage
              alt={dummyArticle.title}
              href={`https://avatars.io/twitter/${dummyArticle.twitterName}`}
            />
          )}
          <Button as={Link} to={`/${pageType}`} activecolor={pageType}>
            save / close
          </Button>
        </StyledWrapper>
      </>
    );
  }
}

Details.propTypes = {
  // title: PropTypes.string.isRequired,
  // created: PropTypes.string.isRequired,
  // content: PropTypes.string.isRequired,
  // articleUrl: PropTypes.string.isRequired,
  // twitterName: PropTypes.string.isRequired,
  match: {
    path: PropTypes.string.isRequired,
  },
};

Details.defaultProps = {
  match: {
    path: '',
  },
};

export default Details;
