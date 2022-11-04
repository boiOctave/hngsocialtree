import {
Badge,
Button,
Checkbox,
FormControl,
InputLabel,
OutlinedInput,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

import './Form.css';
const Form = () => {
const [value, setValue] = useState({
firstName: '',
lastName: '',
email: '',
message: '',
Permission: false,
});
const [errors, setErrors] = useState({});
const [errorClass, setErrorClass] = useState({
firstName: false,
lastName: false,
email: false,
message: false,
Permission: false,
});
const handleFirstName = (e) => {
setValue({ ...value, firstName: e.target.value });
};
const handleLastName = (e) => {
setValue({ ...value, lastName: e.target.value });
};
const handleEmail = (e) => {
setValue({ ...value, email: e.target.value });
};
const handleMessage = (e) => {
setValue({ ...value, message: e.target.value });
};
const handlePermission = () => {
if (value.Permission) {
setValue({ ...value, Permission: false });
} else {
setValue({ ...value, Permission: true });
}
};
const validate = (values) => {
let errors = {};
if (!values.email) {
errors.email = 'Please Fill in Your Email adress';
setErrorClass({
...errorClass,
email: true,
});
} else if (!values.firstName) {
errors.firstName = 'Please Fill in Your First Name';
setErrorClass({ ...errorClass, firstName: true });
} else if (!values.lastName) {
errors.lastName = 'Please Fill in Your last Name';
setErrorClass({
...errorClass,
lastName: true,
});
} else if (!values.message) {
errors.message = 'Please Fill in Your Message';
setErrorClass({
...errorClass,
message: true,
});
} else if (values.Permission === false) {
errors.Permission = 'Please Fill checkbox';
setErrorClass({
...errorClass,
Permission: true,
});
} else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
errors.email = 'Invalid Email';
setErrorClass({
...errorClass,
email: true,
});
}

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(value));
        console.log(errors);
        if (errors === {}) {
            console.log(value);
        }
    };

    return (
        <form noValidate onSubmit={handleSubmit}>
            <div className='name'>
                <div
                    className={`firstname ${
                        errorClass.firstName ? 'error' : ''
                    }`}>
                    <span> First Name</span>
                    <input
                        placeholder='Enter Your First Name'
                        type={'text'}
                        value={value.firstName}
                        onChange={handleFirstName}
                    />
                </div>
                <div
                    className={`lastname ${
                        errorClass.lastName ? 'error' : ''
                    }`}>
                    <span> Last Name</span>
                    <input
                        placeholder='Enter Your Last Name'
                        type={'text'}
                        value={value.lastName}
                        onChange={handleLastName}
                    />
                </div>
            </div>
            <div className={`email ${errorClass.email ? 'error' : ''}`}>
                <span> Email</span>
                <input
                    placeholder='Yourname@email.com'
                    type={'email'}
                    value={value.email}
                    onChange={handleEmail}
                />
            </div>

            <div className={`message ${errorClass.message ? 'error' : ''}`}>
                <span> Message</span>
                <textarea
                    placeholder="Send me a message and i'll reply you as soon as possible..."
                    value={value.message}
                    onChange={handleMessage}
                />
            </div>

            <div className='checkbox'>
                <div className='agree'>
                    <Checkbox onChange={handlePermission} />
                    <span>
                        {' '}
                        You agree to providing your data to Octave Music who may
                        contact you
                    </span>
                </div>
            </div>
            <div className='submit'>
                <Button
                    fullWidth
                    variant='contained'
                    type='submit'
                    sx={{ marginTop: '1rem', textTransform: 'capitalize' }}>
                    Send Message
                </Button>
            </div>
        </form>
    );

};

export default Form;
