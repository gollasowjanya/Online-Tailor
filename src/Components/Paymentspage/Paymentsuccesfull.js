import React from 'react';
import { Link } from 'react-router-dom';
import './payment.css';
const Paymentsuccesfull = () => {
  return (
    <div className='paymentsuccess'>
      <h2>Payment Successful!</h2>
      <p>Thank you for your Order.</p>
      <Link to="/designs">
        <button>Back to Designs</button>
      </Link>
    </div>
  )
}

export default Paymentsuccesfull