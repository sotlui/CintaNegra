import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {  
  const [token, setToken]=useState('');
  const [isAuth, setIsAuth]=useState('');

  return (
    <AuthContext.Provider value={{ 
      token, setToken, isAuth, setIsAuth }}>
      { props.children }
    </AuthContext.Provider>
  )
};

export default AuthContextProvider;