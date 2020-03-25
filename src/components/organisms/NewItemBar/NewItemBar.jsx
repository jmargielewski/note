import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Formik, Form } from 'formik';

import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import withContext from 'hoc/withContext';

import { addItem as addItemAction } from 'actions';

const StyledWrapper = styled.div`
  border-left: 10px solid ${({ theme, activecolor }) => theme[activecolor]};
  z-index: 999;
  position: fixed;
  display: flex;
  padding: 100px 90px;
  flex-direction: column;
  right: 0;
  top: 0;
  height: 100vh;
  width: 600px;
  background-color: #fff;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.25s ease-in-out;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const StyledTextArea = styled(Input)`
  margin: 30px 0 100px;
  border-radius: 10px;
  height: 30vh;
`;

const StyledInput = styled(Input)`
  margin-top: 30px;
`;

const NewItemBar = ({ pageContext, isVisible, addItem, handleClose }) => (
  <StyledWrapper isVisible={isVisible} activecolor={pageContext}>
    <Heading big>Create new {pageContext}</Heading>
    <Formik
      initialValues={{ title: '', content: '', articleUrl: '', twitterName: '' }}
      onSubmit={values => {
        addItem(pageContext, values);
        handleClose();
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <StyledForm>
          <StyledInput
            type="text"
            name="title"
            placeholder="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          {pageContext === 'twitters' && (
            <StyledInput
              type="text"
              name="twitterName"
              placeholder="Twitter name eg. nick_name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.twitterName}
            />
          )}
          {pageContext === 'articles' && (
            <StyledInput
              type="text"
              name="articleUrl"
              placeholder="link"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.articleUrl}
            />
          )}
          <StyledTextArea
            as="textarea"
            name="content"
            placeholder="description"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.content}
          />
          <Button type="submit" activecolor={pageContext}>
            Add Note
          </Button>
        </StyledForm>
      )}
    </Formik>
  </StyledWrapper>
);

NewItemBar.propTypes = {
  pageContext: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  addItem: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default connect(null, { addItem: addItemAction })(withContext(NewItemBar));
