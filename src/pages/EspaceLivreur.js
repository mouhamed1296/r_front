import React from 'react';
import styled from 'styled-components';
import { Navigate } from 'react-router-dom';

const EspaceLivreur = ({token}) => {

  if(token === null) {
    return <Navigate to="/auth" replace />
  }
  return (
    <Wrapper>
     <Content>
        <div className='title'><h4>Espace Livreur</h4> </div>
     </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Content = styled.div``;

export default EspaceLivreur;
