import React from 'react';
import styled from 'styled-components';
// import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';

const SuivreColis = ({token}) => {

  const { register, handleSubmit, formState : {errors}, reset } = useForm();

  const onSubmit = data => {
    console.log(data);

    reset();
  }

  if(token === null) {
    return <Navigate to="/auth" replace />
  }
  
  return (
    <Wrapper>
      <HeaderContent>
        <div className='bouton'>
            <p className='UOne'>
              <button>Retour accueil</button>
            </p>
            <p className='Dtwo'>
              <button>Suivre mon expédition</button>
            </p>
        </div>
      </HeaderContent>
      <Content>
        <div className='contenu'>
          <div className='header'>
            <h4>Suivi de livraison</h4>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-group'>
              <label htmlFor='exampleInputNumero'>Entrez le numero de suivi</label>
              <input type='number' name='suivie' className='form-control' id='exampleInputNumero' aria-describedby='emailHelp' placeholder='Entrer le numero' {...register("suivie", { required: true })}/>
            </div>
            <div className='footer'>
              <p className='bt1'><button type='submit'>Suivre maintenant</button></p>
             <button type="button" onClick={() => reset()}>Effacer</button>
            </div>
          </form>
        </div>
       
        <div className='prettyOne' id='cercle'></div>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 1096px;
`;
const HeaderContent = styled.div`
    background: #292D31;
    height: 15vh;
    width: 100%;
    display: flex;
    margin-top: 35px;

    div.bouton p.UOne {
      background: #F2A401;
      border-radius: 10px;
      width: 336px;
      height: 88px;
      margin-left: 224px;
      padding-top: 40px;
      text-align: center;
      margin-top: 20px;
    }

    div.bouton p.UOne button {
      background: #F2A401;
      border: none;
      color: #fff;
      font-family: 'Epilogue';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 20px;
      width: 150px;
      height: 21px;
      cursor: pointer;
    }

    div.bouton p.Dtwo {
      background: #F2A401;
      border-radius: 10px;
      width: 336px;
      height: 88px;
      margin-left: 1304px;
      margin-top: -99px;
      text-align: center;
    }

    div.bouton p.Dtwo button {
      background: #F2A401;
      color: #FFFFFF;
      margin-top: 35px;
      font-family: 'Epilogue';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 20px;
      width: 220px;
      border-style: none;
      height: 21px;
      cursor: pointer;
    }
`;
const Content = styled.div`
  div.header{
    width: 1916px;
    height: 160px;
    margin-top: 65px;
    background: #F2A401;
  }

  div.header h4{
    width: 259px;
    height: 33px;
    margin-left: 249px;
    padding-top: 60px;
    font-family: 'Epilogue';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 33px;
    color: #FFFFFF;
  }
  div.contenu form{
    width: 1916px;
    height: 460px;
    background: #EFF1F5;
  }
  div.contenu form div.form-group{
    width: 1049px;
    height: 209px;
    margin-left: 172px;
    padding-top: 40px;
  }
  div.form-group label{
    width: 259px;
    height: 21px;
    margin-left: 170px;
    margin-top: 130px;
    font-family: 'Epilogue';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    color: #292D31;
  }
  div.form-group input[type='number']{
    width: 620px;
    height: 48px;
    margin-left: 170px;
    margin-top: 20px;
    background: #FFFFFF;
    border: 0.5px solid rgba(0, 0, 0, 0.5);
  }
  div.footer{
    width: 1916px;
    height: 160px;
    margin-top: 210px;
    background: #F2A401;
  }
  div.footer p.bt1 button[type='submit']{
    font-family: 'Epilogue';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #292D31;
    background: #FFFFFF;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    width: 233px;
    height: 56px;
    margin-left: 398px;
    margin-top: 53px;
  }

  div.footer button[type='button']{
    font-family: 'Epilogue';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #292D31;
    background: #FFFFFF;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    width: 233px;
    height: 56px;
    margin-left: 712px;
  
  }

  // div.prettyOne::after{
  //   content: '';
  //   width: 120px;
  //   height: 4px;
  //   display: block;
  //   // background-color: #000000;
  //   border: 1px solid #000000;
  //   margin-top: 200px;
  //   margin-left: 104px;
  // }

  // #cercle{
  //   width: 40px;
  //   height: 39px;
  //   border-radius: 20px;
  //   background: #F2A401;
    
`;

export default SuivreColis;
