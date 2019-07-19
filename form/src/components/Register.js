import React from 'react'
import {Form, Input, Button} from 'semantic-ui-react'
import {Formik, yupToFormErrors, FormikUserForm} from 'formik'
import axios from 'axios'

function Register({ values, errors, touched }) {

    return (
        <>
            <Form>
                <div>
                {touched.name && errors.name && <h3>{errors.name}</h3>} 
    
                    Name:
                    <Field type="text" 
                            name="name" 
                            placeholder="Name"
                             />
                </div>
    
                <div>
                {touched.password && errors.password && <h3>{errors.password}</h3>} 
    
                    Password:
                    <Field type="password" 
                            name="password" 
                            placeholder="Password"
    
                             />
                </div>
                <button type="submit">Submit!</button>
            </Form>
            </>
        )
    }
    
    const FormikUserForm = withFormik({
        mapPropsToValues({ name, email, password, terms}) {
            return {
            name: name || "",
            email: email || "",
            password: password || "",
            terms: terms || false,
            //If you set terms to false instead of an empty string, 
            //then terms isn't required.
            }
        },
    
        //Validation Schema
        validationSchema: Yup.object().shape({
            name: Yup.string()
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
                            console.log("Success", res) //Data created successfully and logged to console
                            resetForm();
                            setSubmitting(false)
                            {window.alert(
                                res.data.name + ', ' +
                                res.data.email + ', ' +
                                res.data.password + ', ' +
                                res.data.terms
                                )}
    
                        })
                        .catch(err => {
                            console.log(err) //There was an aerror creating the data and logs to console
                            setSubmitting(false)
                        })
                }
            }
        )(Register) 

export default Register