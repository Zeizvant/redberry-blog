import { createContext, useState } from 'react';

export const Context = createContext();

export const MyProvider = ({ children }) => {
  const [buttonClicked, setButtonClicked] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const changeButtonClicked = (state) => {
    setButtonClicked(state);
  };

  const changeLoggedIn = (state) => {
    setLoggedIn(state);
  };

  const contextValue = {
    buttonClicked,
    changeButtonClicked,
    loggedIn,
    changeLoggedIn,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
