import React, { createContext, useState, useContext } from 'react';

const BagContext = createContext();

export const useBag = () => useContext(BagContext);

export const BagProvider = ({ children }) => {
  const [bag, setBag] = useState([]);

  const addToBag = (item) => {
    setBag([...bag, item]);
  };

  return (
    <BagContext.Provider value={{ bag, addToBag }}>
      {children}
    </BagContext.Provider>
  );
};
