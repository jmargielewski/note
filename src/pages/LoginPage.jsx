import React from 'react';
import { Formik, Form, Field } from 'formik';

const LoginPage = () => (
  <div>
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={({ username, password }) =>
        console.log(`username: ${username} password: ${password}`)
      }
    >
      {() => (
        <Form>
          <Field name="username" type="text" />
          <Field name="password" type="password" />
          <button type="submit">sign in</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default LoginPage;
