import React from 'react';
import styled from 'styled-components';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StartSection = () => {
  return (
    <Wrapper>
      <SectionSecond> 
        <img src='/images/Start_Picture.png' alt='StartPicture'/>
        <h6>Alors qu’attendez-vous<br/>pour commencer votre <br/>expérience d’expédition  ?</h6>
        <div>
          <p>Commencer maintenant <FontAwesomeIcon icon={ faArrowRight } style={{marginLeft: "2rem"}} /></p>
        </div>
      </SectionSecond>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 1440px;
  height: 745px;
  background: #FFFFFF;
`;

const SectionSecond = styled.div`
  width: 1316px;
  height: 541px;
  margin-left: 62px;
  background: linear-gradient(90deg, #FFFFFF 10.18%, rgba(22, 70, 194, 0) 100%, #1646C2 100%);

  img {
    width: 566px;
    height: 583px;
    margin-left: 182px;
  }

  h6 {
    width: 694px;
    height: 153px;
    margin-left: 796px;
    margin-top: -483px;
    font-family: 'Epilogue';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 51px;
    color: #292D31;
  }

  div {
    width: 481px;
    height: 100px;
    margin-left: 797px;
    margin-top: 98px;
    border: 6px solid #F2A401;
    border-radius: 50px;
  }

  p{
    widht: 335px;
    height: 29px;
    font-family: 'Epilogue';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 29px;
    color: #292D31;
    margin-top: 28px;
    padding-left: 25px;
    cursor: pointer;
  }
`;


export default StartSection;
