import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Formik, Form } from 'formik';

import routes from 'routes';

import { authenticate as authenticateAction } from 'actions';

import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledInput = styled(Input)`
  margin: 0 0 30px 0;
  height: 40px;
  width: 300px;
`;

const StyledLink = styled(Link)`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: black;
  text-transform: uppercase;
  margin: 20px 0 50px;
`;

const LoginPage = ({ userID, authenticate }) => (
  <Formik
    initialValues={{ username: '', password: '' }}
    onSubmit={({ username, password }) => authenticate(username, password)}
  >
    {({ handleChange, handleBlur, values }) => {
      if (userID) {
        return <Redirect to={routes.home} />;
      }
      return (
        <>
          <Heading>Sign in</Heading>
          <StyledForm>
            <StyledInput
              type="text"
              name="username"
              placeholder="Login"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            <StyledInput
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            <Button activecolor="notes" type="submit">
              sign in
            </Button>
          </StyledForm>
          <StyledLink to={routes.register}>I want my account!</StyledLink>
        </>
      );
    }}
  </Formik>
);

LoginPage.propTypes = {
  authenticate: PropTypes.func.isRequired,
  userID: PropTypes.oneOfType([PropTypes.string.isRequired, null]),
};

LoginPage.defaultProps = {
  userID: null,
};

const mapStateToProps = ({ userID = null }) => ({
  userID,
});

export default connect(mapStateToProps, { authenticate: authenticateAction })(LoginPage);
