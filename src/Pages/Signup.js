import React from 'react';
import { Formik, Form , Field } from 'formik';
import * as Yup from 'yup';
import { TextInput } from '../Components/Login/FormLib';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
import { signupUser } from '../auth/actions/userActions';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; 

const Signup = ({ signupUser }) => {
  const history = useNavigate();

  return (
    <div className="loginbox2 container">
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
      <Formik
        initialValues={{ email: '', password: '', repeatpassword: '', dateOfBirth: '', name: '',address: '' , role:'',phone:''}}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email address').required('Email Required'),
          password: Yup.string().min(8, 'Password is too short').max(30, 'Password is too long').required('Password Required'),
          repeatpassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Repeat Password Required'),
          dateOfBirth: Yup.date().required('Date of Birth Required'),
          name: Yup.string().required('Name Required'),
          address: Yup.string().required('Address Required'),
          phone: Yup.string().length(10, 'Phone number must be exactly 10 digits').required('Phone Number Required'),
          role: Yup.string().required('Role Required')
        })}
        onSubmit={(values, { setFieldError, resetForm }) => {
          signupUser(values, history, setFieldError);
          resetForm();
        }}
      >
        <Form className="form-box2">
          <h2>Register</h2>
          <TextInput id="name" className="inputbox" name="name" type="text" label="Full Name"  />
          <TextInput
            className="inputbox"
            id="email"
            name="email"
            type="text"
            label="Email Address"
            placeholder="abcde@example.com"
           
          />
          <TextInput
            className="inputbox"
            id="phone"
            name="phone"
            type="tel"
            label="Mobile Number"
            placeholder="123456789"
           
          />

          <TextInput
            className="inputbox"
            id="password"
            name="password"
            type="password"
            label="Password"
            placeholder="********"
           
          />

          <TextInput
            className="inputbox"
            id="repeatpassword"
            name="repeatpassword"
            type="password"
            label="Repeat Password"
            placeholder="********"
            
          />
         
          <TextInput className="inputbox" id="dateOfBirth" name="dateOfBirth" type="date" label="Date of Birth"  />
          <TextInput
            className="inputbox"
            id="address"
            name="address"
            type="text"
            label="Address"
            placeholder=" Your Address"
            
          />
          <div className="radio-buttonssign">
            <label className='tailor'>
              <Field type="radio" name="role" value="tailor" />
              I'm a tailor
            </label>
            <label className='customer'>
              <Field type="radio" name="role" value="customer" />
              I'm a customer
            </label>
          </div>

          <button type="submit">Register</button>

          <div className="register">
            <p>
              Already have an account? <Link to="/login">Login here</Link>
            </p>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default connect(null, { signupUser })(Signup);
