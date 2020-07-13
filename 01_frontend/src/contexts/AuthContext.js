import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {  

    
  return (
    <AuthContext.Provider value={{
      mascota:'Jens'
    }}>
      { props.children }
    </AuthContext.Provider>
  )
};

export default AuthContextProvider;