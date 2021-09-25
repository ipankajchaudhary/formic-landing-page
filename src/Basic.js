import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import blue from './logo/blue.png'
import green from './logo/green.png'
import pink from './logo/pink.png'
import yellow from './logo/yellow.png'

const Basic = () => {

    const SignupSchema = Yup.object().shape({
        Name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        designation: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
    });

    return (

        <div className="main-container">
            <div className="logo-container">
                <div className="logo-box">
                    <div className="logo">
                        <img src={blue} alt="" />
                        <img src={pink} alt="" />
                        <img src={green} alt="" />
                        <img src={yellow} alt="" />
                    </div>
                    <div className="logo-text">
                    </div>
                </div>
            </div>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Field name="firstName" />
                        {errors.firstName && touched.firstName ? (
                            <div>{errors.firstName}</div>
                        ) : null}
                        <Field name="lastName" />
                        {errors.lastName && touched.lastName ? (
                            <div>{errors.lastName}</div>
                        ) : null}
                        <Field name="email" type="email" />
                        {errors.email && touched.email ? <div>{errors.email}</div> : null}
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Basic;