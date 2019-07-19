import React from 'react';
import axios from 'axios';
import { Button, Form, Input } from 'semantic-ui-react';
import { Formik, withFormik,  } from 'formik';
import * as Yup from 'yup'

const Register = (props, touched, errors) => {
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
        <div>
        {touched.username && errors.username && <h3>{errors.username}</h3>} 

          <Form.Field
            control={Input}
            label='username'
            name='username'
            id='username'
            type='text'
            onChange={props.handleChange}
            width='4'
          />
          </div>

        <div>
        {touched.password && errors.password && <h3>{errors.password}</h3>} 
          <Form.Field
            control={Input}
            label='password'
            name='password'
            id='password'
            type='text'
            onChange={props.handleChange}
            width='4'
          />
        </div>

          <Button type='submit'>Register</Button>
        </Form>
        
      )
    }
    
    />
    
  );
  
};
const FormikRegister = withFormik({
    mapPropsToValues({ username, password}) {
        return {
        username: username || "",
        password: password || "",
        }
    },

    validationSchema: Yup.object().shape({
        username: Yup.string()
            .required("A name is required")
            .max(30, "This name is way too long."),
        password: Yup.string()
            .min(6, "Your password must have a minimum of six characters.")
            .required("Password is required"),        
    }),
    handleSubmit(values, { setSubmitting }) {
        console.log(values)
                // axios
                //     .post("http://localhost:5000/api/register", values)
                //     .then(res => {
                //         console.log("Success", res) 
                //         setSubmitting(false)

                //     })
                //     .catch(err => {
                //         console.log(err)
                //         setSubmitting(false)
                //     })
            }
        }
    )(Register) 

export default FormikRegister;