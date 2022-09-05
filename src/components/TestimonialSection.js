import React from 'react'
import styled from 'styled-components'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TestimonialSection = () => {
  return (
    <Wrapper>
        <h4>Ce que disent nos clients</h4>
        <ContentOne>
            <img src='/images/Temoin1.png' alt="Temoin1"/>
            <div>
                <h6>Arame Fall</h6>
                <img src='/images/EtoileNote.png' alt='EtoileNote'/>
                <FontAwesomeIcon icon={ faQuoteLeft } color = "#D9D9D9" style={{marginLeft: "-23rem", marginTop: "2rem"}} />
                <p>J'ai reçu mon téléphone en un jour et<br/>j'étais vraiment satisfait de leur<br/>service lorsque je l'ai reçu. Ils sont<br/>vraiment rapides et fiables.</p>
            </div>
        </ContentOne>
        <ContentTwo>
            <img src='/images/Temoin2.png' alt="Temoin2"/>
            <div>
                <h6>Samba DevOps</h6>
                <img src='/images/EtoileNote.png' alt='EtoileNote'/>
                <p>Maintenant, je commande mes <br/>articles informatiques et je me fais livrer en un temps record flashExpress<br/>est le makintosh de la livraison.</p>
            </div>
        </ContentTwo>
        <ContentThree>
            <img src='/images/Temoin3.png' alt="Temoin3"/>
            <div>
                <h6>Dr. Samba Ly</h6>
                <img src='/images/EtoileNote.png' alt='EtoileNote'/>
                <FontAwesomeIcon icon={ faQuoteLeft } color = "#D9D9D9" style={{marginLeft: "-23rem", marginTop: "2rem"}} />
                <p>Je constate depuis un certain temps<br/>mes clients se font livrer leur médicaments par<br/>flashExpress de plus en plus,<br/>et cela est un signe que c’est un bon service.</p>
            </div>
        </ContentThree>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 1905px;
    height: 832px;
    margin-top: 795px;
    background: #292D31;
    
    h4 {
        width: 648px;
        height: 73px;
        margin-left: 596px;
        padding-top: 30px;
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 49px;
        color: #FFFFFF;
    }   
`;

const ContentOne = styled.div`
    img {
        margin-left: 377px;
        width: 212px;
    }
    
    div {
        background: #FFFFFF;
        border-radius: 43px;
        width: 500px;
        height: 500px;
        margin-left: 230px;
        margin-top: -245px;
    }

    div h6 {
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 33px;
        color: #292D31;
        width: 170px;
        height: 33px;
        margin-left: 178px;
        margin-top: 129px;
        padding-top: 110px;
    }
    
    div img {
        margin-left: 170px;
        margin-top: 30px;
    }
    
    div p {
        color: #292D31;
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 25px;
        width: 440px;
        height: 100px;
        margin-left: 27px;
        padding-top: 30px;
    }
`;

const ContentTwo = styled.div`
    img {
        margin-left: 932px;
        width: 212px;
        margin-top: -995px;
    }

    div {
        background: #FFFFFF;
        border-radius: 43px;
        width: 500px;
        height: 500px;
        margin-left: 778px;
        margin-top: -648px;
    }

    div h6 {
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 33px;
        color: #292D31;
        width: 270px;
        height: 33px;
        margin-left: 138px;
        margin-top: 129px;
        padding-top: 115px;
    }

    div img {
        margin-left: 140px;
        margin-top: 20px;
    }

    div p {
        color: #292D31;
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 25px;
        width: 440px;
        height: 100px;
        margin-left: 27px;
        padding-top: 30px;
    }
`;

const ContentThree = styled.div`
    img {
        margin-left: 1458px;
        width: 212px;
        margin-top: -998px;
    }

    div {
        background: #FFFFFF;
        border-radius: 43px;
        width: 500px;
        height: 500px;
        margin-left: 1321px;
        margin-top: -518px;
    }

    div h6 {
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 33px;
        color: #292D31;
        width: 270px;
        height: 33px;
        margin-left: 178px;
        margin-top: 4px;
        padding-top: 99px;
    }

    div img {
        margin-left: 170px;
        margin-top: 10px;
    }

    div p {
        color: #292D31;
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 25px;
        width: 440px;
        height: 100px;
        margin-left: 27px;
        padding-top: 20px;
    }
`;

export default TestimonialSection;
