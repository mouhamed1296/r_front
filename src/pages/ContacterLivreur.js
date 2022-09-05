import React from 'react';
import { Navigate } from 'react-router-dom';

const ContacterLivreur = ({token}) => {

  if(token === null) {
    return <Navigate to="/auth" replace />
  }
  return (
    <div>
      
      
    </div>
  );
}

export default ContacterLivreur;
