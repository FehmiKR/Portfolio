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




/* import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Basic = () => (
    <div>
        <h1>Any place in your app!</h1>
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                    <button type="submit" disabled={isSubmitting} >
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    </div>
);

export default Basic; */







/*    < div className = "bg-grey-lighter min-h-screen flex flex-col" >
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 className="mb-8 text-3xl text-center">Registration 🚀</h1>
                <input
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="firstName"
                    placeholder="First Name"
                />

                <input
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="lastName"
                    placeholder="Last Name"
                />

                <input
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="email"
                    placeholder="Email"
                />

                <input
                    type="password"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="password"
                    placeholder="Password (5 characters and above)"
                />

                <input
                    type="password"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="Vpassword"
                    placeholder="Confirm Password"
                />

                <button
                    type="submit"
                    className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
                >
                    Create Account 🚀
                </button>

                <div className="text-center text-sm text-grey-dark mt-4">
                    By signing up, you agree to the
                    <a
                        className="no-underline border-b border-grey-dark text-grey-dark"
                        href="#"
                    >
                        Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                        className="no-underline border-b border-grey-dark text-grey-dark"
                        href="#"
                    >
                        Privacy Policy
                    </a>
                </div>
            </div>

            <div className="text-grey-dark mt-6">
                Already have an account?
                <a
                    className="no-underline border-b border-blue text-blue"
                    href="../login/"
                >
                    Log in
                </a>
                .
            </div>
        </div>
                    </div >

                    */