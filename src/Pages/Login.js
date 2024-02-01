import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextInput } from '../Components/Login/FormLib';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import useActions from '../auth/actions/useAction';
import { useDispatch } from 'react-redux';
import {login} from './../auth/actions/authSlice';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const LoginForm = () => {
  const { loginUser } = useActions();
  const history = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="loginbox container">
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email address').required('Email Required'),
          password: Yup.string().min(8, 'Password is too short').required('Password Required'),
        })}
        onSubmit={(values, { setFieldError, resetForm }) => {
          loginUser(values, history, setFieldError, dispatch).then((userData) => {
            if (userData) {
              dispatch(login(userData)); 
            }
            resetForm();
          });
        }}
      >
        <Form className="form-box">
          <h2>Login</h2>
          <TextInput
            className="input-box"
            name="email"
            type="text"
            label="Email Address"
            placeholder="olga1@example.com"
          />
          <TextInput
            className="input-box"
            name="password"
            type="password"
            label="Password"
            placeholder="********"
          />
          <button type="submit">Login</button>
          <div className="register">
            <p>
              Don't have an account? <Link to="/register">Register here</Link>
            </p>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
