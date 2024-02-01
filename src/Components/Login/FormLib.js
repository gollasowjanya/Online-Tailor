import React from 'react';
import { useField, Field } from 'formik';

import { toast } from 'react-toastify';
import '../../../node_modules/react-toastify/dist/ReactToastify.css';

export const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const showToast = (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
      hideProgressBar: false,
    });
  };

  return (
    <div className="inputbox">
      <label htmlFor={props.name}>
        {label}
        {props.required && !meta.error && <span className="required-marker">*</span>}
      </label>
      <Field
        as="input"
        className={meta.touched && meta.error ? 'error' : ''}
        {...field}
        {...props}
        onBlur={(e) => {
          field.onBlur(e); // Call the original onBlur, if any
          if (meta.error) {
            showToast(meta.error);
          }
        }}
      />
    </div>
  );
};
