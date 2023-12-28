import { createContext, useContext, useEffect, useState } from 'react';

export const Context = createContext();

export const useAuth = () => {
  return useContext(Context);
};

export const MyProvider = ({ children }) => {
  const [buttonClicked, setButtonClicked] = useState([]);
  const [loggedIn, setLoggedIn] = useState('');

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn) {
      loggedIn === 'true' ? setLoggedIn(true) : setLoggedIn(false);
    } else {
      setLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    const buttonClicked = localStorage.getItem('buttonClicked');
    if (buttonClicked) {
      console.log(buttonClicked);
      setButtonClicked(JSON.parse(buttonClicked));
    }
  }, []);

  const changeButtonClicked = (state) => {
    setButtonClicked(state);
    localStorage.setItem('buttonClicked', JSON.stringify(state));
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
