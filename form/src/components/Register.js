import React from 'react';
import axios from 'axios';
import { Button, Form, Input } from 'semantic-ui-react';
import { Formik } from 'formik';

const Register = props => {
  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.setSubmitting(true);
        axios
          .post('http://localhost:5000/api/register', values)
          .then(res => {
            localStorage.setItem('token', res.data.token);
            console.log(props);
          })
          .then(() => props.history.push('restricted/data'))
          .catch(err => console.log(err));
      }}
      render={props => (
        <Form
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          onSubmit={props.handleSubmit}
        >
          <Form.Field
            control={Input}
            label='username'
            name='username'
            id='username'
            type='text'
            onChange={props.handleChange}
            width='4'
          />

          <Form.Field
            control={Input}
            label='password'
            name='password'
            id='password'
            type='text'
            onChange={props.handleChange}
            width='4'
          />

          <Button type='submit'>Register</Button>
        </Form>
      )}
    />
  );
};

export default Register;