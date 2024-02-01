import { toast } from 'react-toastify';
import axios from 'axios';
import { login } from './authSlice';
const API_URL = 'http://localhost:7000'; 

export const loginUser = (credentials, history, setFieldError, dispatch) => async () => {
  try {
   const response = await axios.post(`${API_URL}/user/signin`, credentials, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const { data } = response;
    toast.info(JSON.stringify(data.message));
    console.log('Login Response:', data);
    if (data.status === 'FAILED') {
      const { message } = data;
      if (message.includes('credentials')) {
        setFieldError('email', message);
        setFieldError('password', message);
      } else if (message.includes('password')) {
        setFieldError('password', message);
      }
    } else if (data.status === 'SUCCESS') {
      const userData = data.data ; 
      if (userData) {
        dispatch(login(userData));
        toast.info(`Welcome, ${userData.name}!`);
        history('/Home');
      } else {
        toast.error('Error: Unable to fetch user data after login');
      }
    }
    else {
      toast.error('Error: Unable to fetch user data after login');
    }
  } catch (error) {
    toast.error('Error during login: ' + error);
  }
};

export const signupUser = (credentials, history, setFieldError, dispatch) => async () => {
  try {   
    const response = await axios.post(`${API_URL}/user/signup`, credentials, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { data } = response;
    toast.info(JSON.stringify(data.message));
    if (data.status === 'FAILED') {
      const { message } = data;
      setFieldError('email', message);
      setFieldError('password', message);
    } 
    else if (data.status === 'PENDING') {
       const userData = data.data[0];
      dispatch({ type: 'LOGIN', payload: userData });
       history('/verified'); 
    }
   
  } catch (error) {
    toast.error('Error during signup: ' + error);
  }
};

export const logoutUser = (dispatch) => () => {
  
  dispatch({ type: 'LOGOUT' });

};
