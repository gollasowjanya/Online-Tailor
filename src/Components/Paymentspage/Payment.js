import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './payment.css';
import { FaCreditCard, FaMoneyBillAlt, FaRegCreditCard } from 'react-icons/fa'; // Import icons

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('');

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/payment-success');
  };
  const [amount, setAmount] = useState('');
  return (
    <div className="payment-container">
      <h1 className="payment-header">Payment Options</h1>
      <div className="payment-options">
        <div className="payment-option">
          <input
          className='paymentradio'
            type="radio"
            id="debitCard"
            name="paymentMethod"
            value="debitCard"
            checked={paymentMethod === 'debitCard'}
            onChange={() => setPaymentMethod('debitCard')}
          />
          <label htmlFor="debitCard">
            Pay with Debit Card <FaCreditCard className="icon" />
          </label>
          {paymentMethod === 'debitCard' && (
            <div className="debit-card-details">
              <select className="input-field" >
                <option>Select Bank</option>
                <option>Bank 1</option>
                <option>Bank 2</option>
              </select>
              <input className="input-field" type="text" placeholder="Card Number" />
              <input className="input-field" type="text" placeholder="Name on Card" />
              <input className="input-field" type="text" placeholder="ATM Number" />
              <input className="input-field"  type="text" placeholder="CVV" />
            </div>
          )}
        </div>
        <div className="payment-option">
          <input
          className='paymentradio'
            type="radio"
            id="payOnDelivery"
            name="paymentMethod"
            value="payOnDelivery"
            checked={paymentMethod === 'payOnDelivery'}
            onChange={() => setPaymentMethod('payOnDelivery')}
          />
          <label htmlFor="payOnDelivery">
            Pay on Delivery <FaMoneyBillAlt className="icon" />
          </label>
        </div>
        <div className="payment-option">
          <input
          className='paymentradio'
            type="radio"
            id="halfPayment"
            name="paymentMethod"
            value="halfPayment"
            checked={paymentMethod === 'halfPayment'}
            onChange={() => setPaymentMethod('halfPayment')}
          />
          <label htmlFor="halfPayment">
            Half Payment <FaRegCreditCard className="icon" />
          </label>
        </div>
        <div className="payment-option">
          <label htmlFor="amount">Amount to be Paid:</label>
          <input
            type="text"
            id="amount"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>
      </div>
      <button className="btn" onClick={handleSubmit}>
        Proceed

      </button>
    </div>
  );
};

export default Payment;
