import React from 'react';
import { useBag } from './BagContext';
import './email.css'

const BagComponent = () => {
  const { bag } = useBag();

  return (
    <div className='mybag'>
      <h2 className='bag' >Your Bag</h2>
      
      <ul>
        {bag.map((item, index) => (
          <li key={index} className='baglist'>
            <div>Category : {item.category}</div>
            <div>Model : {item.model}</div>
            <div>Price : {item.price}</div>
            <img className= "bagimage" src={item.imgSrc} alt='item' />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BagComponent;
