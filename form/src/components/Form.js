import React from 'react'
import {Form, Input, Button} from 'semantic-ui-react'
import {Formik} from 'formik'
import axios from 'axios'

const Login = (props) => {
    return (
        <Formik
        initialValues= {{
            username: '',
            password: '',

        }}
        onSubmit= {(values, actions) => {
            actions.setSubmitting(true)
            axios.post('http://localhost:5000/api/login', values)
                .then(res =>  {
                    localStorage.setItem('token', res.data.payload)
                })
                .then(() => props.history.push('/friends'))
                .catch(err => console.log(err))
            }}
        render={props => {

            return (
        <Form style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} onSubmit={props.handleSubmit}>
            <Form.Field
            control={Input}
            label="username"
            name="username"
            id="username"
            type="text"
            width="4"
            onChange={props.handleChange}/>
            <Form.Field
            control={Input}
            label="password"
            name="password"
            id="password"
            type="text"
            onChange={props.handleChange}
            width="4"
            />
            <Button type="submit">Submit</Button>
            </Form>
        
            )
        }}
        />
    )

}

export default Login