import React from "react";
import styled from "styled-components";

const HomeSection = () => {
  return (
    <Wrapper>
      <HomeContentSection>
        <div>
          <h1>Imagine un endroit où ...</h1>
          <p>
            ...vous pouvez trouver un livreur fiable et
            <br />
            rapide pour vos précieux colis, un lieu où
            <br />
            vous pouvez suivre le processus
            <br />
            d’expédition du début à la fin...{" "}
          </p>
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
          <div id="service">
            <h2>Services</h2>
            <p>
              Nous fournissons des services sur lesquels vous pouvez compter
            </p>
          </div>
        </ServiceSection>
        <FirstService>
          <div className="container1">
            <div>
              <img src="/images/firstService.png" alt="firstService" />
            </div>
            <div className="textContainer1">
              <h3>Simple d’utilisation et sécurisée</h3>
              <p>
                flashExpress a été conçue pour permettre à<br />
                tout le monde de pouvoir passer commander
                <br />
                et de se faire livrer de la manière la plus
                <br />
                simple, la plus fiable et la plus sécurisée.
              </p>
            </div>
          </div>
        </FirstService>
        <SecondService>
          <div className="container2">
            <div>
              <img src="/images/secondService.png" alt="secondService" />
            </div>
            <div className="textContainer2">
              <h3>
                Suivi en ligne de l’expédition et
                <br />
                une équipe à votre écoute
              </h3>
              <p>
                Nous vous alertons du déroulement de
                <br />
                chaque étape de l'expédition de votre
                <br />
                colis depuis votre espace client, ou par
                <br />
                mail. En plus, notre équipe reste active en
                <br />
                cas de besoins.
              </p>
            </div>
          </div>
        </SecondService>
        <ThirdService>
          <div className="container3">
            <div>
              <img src="/images/thirdService.png" alt="thirdService" />
            </div>
            <div className="textContainer3">
              <h3>Economie d’argent, d’énergie et de temps</h3>
              <p>
                Aliments, vêtements, matériels, médicaments...
                <br />
                Commandez tranquillement dans nos nombreux <br />
                magasins, restaurants, pharmacies
                <br />
                partenaires et faites-vous livrer avec le meilleur
                <br />
                rapport qualité prix qu’il soit.
              </p>
            </div>
          </div>
        </ThirdService>
      </Wrapper2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
`;

const HomeContentSection = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 2rem;
  margin-bottom: 1rem;
  @media (max-width: 1040px) {
    flex-direction: column;
    gap: 1rem;
    padding-left: 0;
  }

  div h1 {
    box-sizing: border-box;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 49px;
    color: #292d31;
  }

  div p {
    box-sizing: border-box;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 33px;
    color: #292d31;
  }

  div button {
    background: #ffffff;
    border: 1px solid #f2a401;
    box-shadow: 0px 4px 4px rgba(242, 164, 1, 0.25);
    border-radius: 28.5px;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 25px;
    color: #292d31;
    cursor: pointer;
  }
`;
const ImageSection = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  @media (max-width: 1040px) {
    img {
      width: 300px;
      height: 300px;
    }
  }
`;

const ScrollDown = styled.div`
  width: 100%;
  height: auto;
  background: linear-gradient(180deg, #ffffff 13.56%, #f2a401 183.05%);
  border-radius: 90px;

  p {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    color: #292d31;
    cursor: pointer;
  }
`;

const Wrapper2 = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
`;

const ServiceSection = styled.div`
  div h2 {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 49px;
    color: #292d31;
  }

  div p {
    color: #292d31;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 35px;
  }
`;

const FirstService = styled.div`
  div.container1 {
    width: 100%;
    margin-top: 40px;
    display: flex;
    gap: 2rem;
    padding: 1rem;
    height: auto;
    background: #eff1f5;
    @media (max-width: 1040px) {
      flex-direction: column;
    }
  }
  div.textContainer1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }

  div img {
    width: 400px;
    height: 400px;
    @media (max-width: 1040px) {
      width: 300px;
      height: 300px;
    }
  }

  div h3 {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 33px;
    color: #292d31;
  }

  div p {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 25px;
    color: #292d31;
  }
`;

const SecondService = styled.div`
  div.container2 {
    width: 100%;
    margin-top: 40px;
    display: flex;
    gap: 2rem;
    padding: 1rem;
    height: auto;
    background: #eff1f5;
    @media (max-width: 1040px) {
      flex-direction: column;
    }
  }
  div.textContainer2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }

  div img {
    width: 400px;
    height: 400px;
    @media (max-width: 1040px) {
      width: 300px;
      height: 300px;
    }
  }

  div h3 {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 33px;
    color: #292d31;
  }

  div p {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 25px;
    color: #292d31;
  }
`;
const ThirdService = styled.div`
  div.container3 {
    width: 100%;
    margin-top: 40px;
    display: flex;
    gap: 2rem;
    padding: 1rem;
    height: auto;
    background: rgb(246, 164, 1, 0.24);
    @media (max-width: 1040px) {
      flex-direction: column;
    }
  }
  div.textContainer3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }

  div img {
    width: 400px;
    height: 400px;
    @media (max-width: 1040px) {
      width: 300px;
      height: 300px;
    }
  }

  div h3 {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 33px;
    color: #292d31;
  }

  div p {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 25px;
    color: #292d31;
  }
`;
export default HomeSection;
