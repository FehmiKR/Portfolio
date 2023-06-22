import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('*Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('*Required'),
            email: Yup.string().email('Invalid email address').required('*Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 w-[150%]">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Contact form 😊</h1>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                            className="block border border-grey-light w-full px-3 py-3 rounded mb-1"
                            placeholder="Your name..."
                        />
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <div className='text-red-500 mb-4'>{formik.errors.firstName}</div>
                        ) : null}

                        <div className='mt-4' />
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName}
                            className="block border border-grey-light w-full px-3 py-3 rounded mb-1"
                            placeholder="Your last name..."
                        />
                        {formik.touched.lastName && formik.errors.lastName ? (
                            <div className='text-red-500 mb-4'>{formik.errors.lastName}</div>
                        ) : null}

                        <div className='mt-4' />
                        <label htmlFor="email" className='mt-10'>Email Address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            className="block border border-grey-light w-full px-3 py-3 rounded mb-1"
                            placeholder="Email..."
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className='text-red-500 mb-4'>{formik.errors.email}</div>
                        ) : null}

                        <div className='mt-4' />
                        <label htmlFor="message">Message</label>
                        <textarea className='w-full border border-solid border-grey-light rounded px-3 py-2 h-32'
                            placeholder='Write your message here...' />

                        <button type="submit" className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-4" >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};
export default SignupForm

