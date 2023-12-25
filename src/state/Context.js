import { createContext, useEffect, useState } from 'react';

export const Context = createContext();

export const MyProvider = ({ children }) => {
  const [buttonClicked, setButtonClicked] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn) {
      loggedIn === 'true' ? setLoggedIn(true) : setLoggedIn(false);
    }
  }, []);

  const changeButtonClicked = (state) => {
    setButtonClicked(state);
  };

  const changeLoggedIn = (state) => {
    setLoggedIn(state);
    localStorage.setItem('loggedIn', state);
  };

  const contextValue = {
    buttonClicked,
    changeButtonClicked,
    loggedIn,
    changeLoggedIn,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
