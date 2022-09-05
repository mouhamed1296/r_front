import React from 'react';
import styled from 'styled-components';

const HomeSection = () => {
  return (
    <Wrapper>
        <HomeContentSection>
            <div>
                <h1>Imagine un endroit où ...</h1>
                <p>...vous  pouvez trouver un livreur fiable et<br/>rapide pour vos précieux colis, un lieu où<br/>vous pouvez suivre le processus<br/>d’expédition du début à la fin... </p>
                <button>En savoir plus</button>
            </div>
            <ImageSection>
                <img src={"/images/home.png"} alt="homeSection" />
            </ImageSection>
        </HomeContentSection>
        <ScrollDown>
            <p>Défiler vers le bas</p>
        </ScrollDown>
        <Wrapper2>
            <ServiceSection>
                <div id='service'>
                    <h2>Services</h2>
                    <p>Nous fournissons des services sur lesquels vous pouvez compter</p>
                </div>
            </ServiceSection>
            <FirstService>
                <div>
                    <div><img src='/images/firstService.png' alt="firstService"/></div>
                    <div>
                        <h3>Simple d’utilisation et sécurisée</h3>
                        <p>flashExpress a été conçue pour permettre à<br/>tout le monde de pouvoir passer commander<br/>et de se faire livrer de la manière la plus<br/>simple, la plus fiable et la plus sécurisée.</p>
                    </div>
                </div>
            </FirstService>
            <SecondService>
                <div>
                    <div>
                        <img src='/images/secondService.png' alt="secondService"/>
                    </div>
                    <div>
                        <h3>Suivi en ligne de l’expédition et<br/>une équipe à votre écoute</h3>
                        <p>Nous vous alertons du déroulement de<br/>chaque étape de l'expédition de votre<br/>colis depuis votre espace client, ou par<br/>mail. En plus, notre équipe reste active en<br/>cas de besoins.</p>
                    </div>
                </div>
            </SecondService>
            <ThirdService>
                <div>
                    <div>
                        <img src='/images/thirdService.png' alt="thirdService"/>
                    </div>
                    <div>
                        <h3>Economie d’argent, d’énergie et de temps</h3>
                        <p>Aliments, vêtements, matériels, médicaments...<br/>Commandez  tranquillement dans nos nombreux <br/>magasins, restaurants, pharmacies<br/>partenaires et faites-vous livrer avec le meilleur<br/>rapport qualité prix qu’il soit.</p>
                    </div>
                </div>
            </ThirdService>
        </Wrapper2>
    </Wrapper>
   
  );
}

const Wrapper = styled.div`
    width: 1440px;
    height: 2829.21px;
    margin-left: 0;
    margin-top: 152px;`;

const HomeContentSection = styled.div`
    width: 1326px;
    height: 570px;
    margin-left: 52px;
    margin-top: 219px;
    
    div h1 {
        box-sizing: border-box;
        width: 650px;
        height: 97px;
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 49px;
        color: #292D31;
        margin-left: 270px;
    }
    
    div p {
        box-sizing: border-box;
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 33px;
        color: #292D31;
        width: 650px;
        height: 110px;
        margin-left: 252px;
        margin-top: 30px;
    }
    
    div button {
        width: 224px;
        height: 57px;
        margin-left: 270px;
        margin-top: 50px;
        background: #FFFFFF;
        border: 1px solid #F2A401;
        box-shadow: 0px 4px 4px rgba(242, 164, 1, 0.25);
        border-radius: 28.5px;
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 25px;
        color: #292D31;
        cursor: pointer;
    }`;
const ImageSection = styled.div`
    width: 570px;
    height: 570px;
    margin-left: 998px;
    margin-top: -499px;`;

const ScrollDown = styled.div`
    width: 233px;
    height: 57.76px;
    margin-top: -90px;
    margin-left: 881.61px;
    background: linear-gradient(180deg, #FFFFFF 13.56%, #F2A401 183.05%);
    border-radius: 90px;

    p {
        margin-left: 25px;
        padding-top: 20px;
        width: 178px;
        height: 21px;
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
        color: #292D31;
        cursor: pointer;
    };
`;

const Wrapper2 = styled.div`
    width: 1441px;
    height: 2844px;
    margin-left: 0;
    margin-top: 1054px;`;

const ServiceSection = styled.div`

    div h2 {
        width: 224px;
        height: 73px;
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 49px;
        color: #292D31;
        margin-left: 873px;
        margin-top: -1008px;
    }
    
    div p {
        color: #292D31;
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 35px;
        width: 1123px;
        height: 44px;
        margin-left: 430px;
    }`;

const FirstService = styled.div`
    div {
        width: 1905px;
        margin-top: 40px;
        height: 510px;
        background: #EFF1F5;
    }
    
    div img {
        width: 551px;
        height: 504px;
        margin-left: 390px;
        margin-top: 100px;
    }
    
    div h3 {
        width: 527px;
        height: 33px;
        margin-left: 996px;
        margin-top: -326px;
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 33px;
        color: #292D31;
    }
    
    div p {
        width: 539px;
        height: 189px;
        margin-left: 996px;
        margin-top: 27px;
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 25px;
        color: #292D31;
    }`;

const SecondService = styled.div`
    div {
        background: #F6F7FA;
        margin-top: 225px;
        width: 1905px;
        height: 673px;
    }
    
    div img {
        width: 551px;
        height: 553.49px;
        margin-left: 956px;
        margin-top: 236px;
    }
    
    div h3 {
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 33px;
        height: 97px;
        width: 511px;
        margin-top: -500px;
        margin-left: 395px;
        color: #292D31;
    }
    
    div p {
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 25px;
        color: #292D31;
        width: 498px;
        height: 141px;
        margin-left: 395px;
    }`;
const ThirdService = styled.div`
    div {
        width: 1905px;
        height: 732px;
        background-color: rgb(246, 164, 1, 0.24);
        margin-left: 0;
        margin-top: 398px;
    }
    
    div img {
        width: 458px;
        height: 655px;
        margin-left: 370px;
        margin-top: 212px;
    }
    
    div h3 {
        width: 576px;
        height: 66px;
        margin-left: 883px;
        margin-top: -828px;
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 33px;
        color: #292D31;
    }
    
    div p {
        width: 570px;
        height: 125px;
        margin-left: 883px;
        margin-top: 38px;
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 25px;
        color: #292D31;
    }
`;
export default HomeSection;
