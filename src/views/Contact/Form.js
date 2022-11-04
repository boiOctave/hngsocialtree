import { Alert, Button, Checkbox, Snackbar } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';

import React, { useEffect, useState } from 'react';

import './Form.css';
const Form = () => {
    const [open, setOpen] = useState(false);
    const [successOpen, setSuccessOpen] = useState(false);
    const [value, setValue] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        Permission: false,
    });

    const [errorClass, setErrorClass] = useState({
        firstName: false,
        lastName: false,
        email: false,
        message: false,
        Permission: false,
    });

    const handlePermission = () => {
        if (value.Permission) {
            setValue({ ...value, Permission: false });
        } else {
            setValue({ ...value, Permission: true });
        }
    };

    //     const handleSubmit = (e) => {
    //         e.preventDefault();
    //         setErrors(validate(value));
    //         console.log(errors);
    //         if (errors === {}) {
    //             console.log(value);
    //         }
    //     };
    useEffect(() => {
        if (value.Permission) {
            setErrorClass({ ...errorClass, Permission: false });
        }
    }, [value.Permission]);

    const handleClose = (e, reason) => {
        setOpen(false);
        setSuccessOpen(false);
    };

    return (
        <Formik
            initialValues={{
                email: '',
                message: '',
                firstName: '',
                lastName: '',
                submit: null,
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string()
                    .email('Must be a valid email')
                    .max(255)
                    .required('Email is required'),
                message: Yup.string().required('Message is required'),
                firstName: Yup.string()
                    .max(255)
                    .required('First Name is required'),
                lastName: Yup.string()
                    .max(255)
                    .required('Last Name is required'),
            })}
            onSubmit={async (
                values,
                { setErrors, setStatus, setSubmitting }
            ) => {
                try {
                    if (!value.Permission) {
                        setErrorClass({ ...errorClass, Permission: true });

                        setOpen(true);
                    } else {
                        setSuccessOpen(true);
                    }
                } catch (err) {
                    console.error(err);
                }
            }}>
            {({ errors, touched, handleSubmit, values, handleChange }) => (
                <form noValidate onSubmit={handleSubmit}>
                    <div className='name'>
                        <div
                            className={`firstname ${
                                errors.firstName && touched.firstName
                                    ? 'error'
                                    : ''
                            }`}>
                            <span> First Name</span>
                            <input
                                placeholder='Enter Your First Name'
                                type={'text'}
                                value={values.firstName}
                                onChange={handleChange}
                                name='firstName'
                                id='first_name'
                            />
                            {errors.firstName && touched.firstName ? (
                                <div className='yupError'>
                                    {errors.firstName}
                                </div>
                            ) : null}
                        </div>
                        <div
                            className={`lastname ${
                                errors.lastName ? 'error' : ''
                            }`}>
                            <span> Last Name</span>
                            <input
                                placeholder='Enter Your Last Name'
                                type={'text'}
                                value={values.lastName}
                                onChange={handleChange}
                                name='lastName'
                                id='last_name'
                            />
                            {errors.lastName && touched.lastName ? (
                                <div className='yupError'>
                                    {errors.lastName}
                                </div>
                            ) : null}
                        </div>
                    </div>
                    <div className={`email ${errors.email ? 'error' : ''}`}>
                        <span> Email</span>
                        <input
                            placeholder='Yourname@email.com'
                            type='email'
                            value={values.email}
                            onChange={handleChange}
                            name='email'
                            id='email'
                        />
                        {errors.email && touched.email ? (
                            <div className='yupError'>{errors.email}</div>
                        ) : null}
                    </div>
                    <div className={`message ${errors.message ? 'error' : ''}`}>
                        <span> Message</span>
                        <textarea
                            placeholder="Send me a message and i'll reply you as soon as possible..."
                            value={values.message}
                            onChange={handleChange}
                            name='message'
                            id='message'
                        />
                        {errors.message && touched.message ? (
                            <div className='yupError__message'>
                                {errors.message}
                            </div>
                        ) : null}
                    </div>
                    <div
                        className={`checkbox ${
                            errorClass.Permission ? 'error' : ''
                        }`}>
                        <div className='agree'>
                            <Checkbox onChange={handlePermission} />
                            <span>
                                {' '}
                                You agree to providing your data to Octave who
                                may contact you
                            </span>
                        </div>
                    </div>
                    <div className='submit'>
                        <Button
                            fullWidth
                            variant='contained'
                            type='submit'
                            id='btn__submit'
                            sx={{
                                marginTop: '1rem',
                                textTransform: 'capitalize',
                            }}>
                            Send Message
                        </Button>
                    </div>
                    <Snackbar
                        className='toAST'
                        open={open}
                        autoHideDuration={5000}
                        onClose={handleClose}>
                        <Alert onClose={handleClose} severity='error'>
                            Checkbox required
                        </Alert>
                    </Snackbar>
                    <Snackbar
                        className='toAST'
                        open={successOpen}
                        autoHideDuration={13000}
                        onClose={handleClose}
                        sx={{ width: '200px' }}>
                        <Alert onClose={handleClose} severity='success'>
                            Thank You{' '}
                            {
                                <span>
                                    {values.firstName} {values.lastName}
                                </span>
                            }{' '}
                            Message sent to Succssfully
                        </Alert>
                    </Snackbar>
                </form>
            )}
        </Formik>
    );
};

export default Form;
