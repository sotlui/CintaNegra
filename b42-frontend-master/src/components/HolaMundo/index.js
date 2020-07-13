import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const HolaMundo = () => {
  const { setNombre } = useContext(AuthContext);
  return ( 
    <input
      onChange={(e) => setNombre(e.target.value)}
      type="text"
      label="Introduce tu nombre" />
  );
}
 
export default HolaMundo;