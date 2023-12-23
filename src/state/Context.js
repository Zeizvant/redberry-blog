import { createContext, useContext, useState } from 'react';

export const Context = createContext();

export const MyProvider = ({ children }) => {
  const [buttonClicked, setButtonClicked] = useState([]);

  const changeButtonClicked = (state) => {
    setButtonClicked(state);
  };

  const contextValue = {
    buttonClicked,
    changeButtonClicked,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
