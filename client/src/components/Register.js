
import React, {useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axiosWithAuth from '../utils/axiosWithAuth';

const Register = ({values, errors, touched, status}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        status && setUsers(users => 
            [...users, status]
        )
    }, [status]);

    return (
        <Form>
            <label>
                username
                <Field 
                    type='text'
                    name='username'
                />
                {touched.username && errors.username && (
                    <p className="errors">
                        {errors.username}
                    </p> 
                )}
            </label>
            <label>
                password
                <Field 
                    type='password'
                    name='username'
                />
                    {touched.password && errors.username && (
                    <p className="errors">
                        {errors.password}
                    </p> 
                )}
            </label>
            <button type='submit'>Submit</button>
        </Form>
    );
};

const FormikRegister = withFormik({
    mapPropsToValues({ username, password}) {
        return {
            username: username || '',
            password: password || '',
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required().min(3),
        password: Yup.string().required().min(3)
    }),
    handleSubmit(values, {props, setStatus}){
        axiosWithAuth()
        .post('/auth/register', values)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log('No dice..', error.response);
        });
    }
})(Register);

export default FormikRegister