import React from 'react';
import axios from 'axios';
import { Formik, withFormik, Field, Form  } from 'formik';
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

          <Field
            placeholder="Username"
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
          <Field
            placeholder="Password"
            label='password'
            name='password'
            id='password'
            type='text'
            onChange={props.handleChange}
            width='4'
          />
        </div>

          <button type='submit'>Register</button>
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
    handleSubmit(values, {resetForm, setSubmitting }) {
        console.log(values)
                axios
                    .post("https://reqres.in/api/users", values)
                    .then(res => {
                        console.log("Success", res) 
                        resetForm();
                        setSubmitting(false)
                

                    })
                    .catch(err => {
                        console.log(err) 
                        setSubmitting(false)
                    })
            }
        }
    )(Register) 

export default FormikRegister;