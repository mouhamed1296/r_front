import React from "react";
import styled from "styled-components";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TestimonialSection = () => {
  return (
    <Wrapper>
      <h4>Ce que disent nos clients</h4>
      <Content>
        <ContentOne>
          <img src="/images/Temoin1.png" alt="Temoin1" />
          <div>
            <h6>Arame Fall</h6>
            <img src="/images/EtoileNote.png" alt="EtoileNote" />
            <FontAwesomeIcon
              icon={faQuoteLeft}
              color="#D9D9D9"
              style={{ marginLeft: "-23rem", marginTop: "2rem" }}
            />
            <p>
              J'ai reçu mon téléphone en un jour et
              <br />
              j'étais vraiment satisfait de leur
              <br />
              service lorsque je l'ai reçu. Ils sont
              <br />
              vraiment rapides et fiables.
            </p>
          </div>
        </ContentOne>
        <ContentTwo>
          <img src="/images/Temoin2.png" alt="Temoin2" />
          <div>
            <h6>Samba DevOps</h6>
            <img src="/images/EtoileNote.png" alt="EtoileNote" />
            <p>
              Maintenant, je commande mes <br />
              articles informatiques et je me fais livrer en un temps record
              flashExpress
              <br />
              est le makintosh de la livraison.
            </p>
          </div>
        </ContentTwo>
        <ContentThree>
          <img src="/images/Temoin3.png" alt="Temoin3" />
          <div>
            <h6>Dr. Samba Ly</h6>
            <img src="/images/EtoileNote.png" alt="EtoileNote" />
            <FontAwesomeIcon
              icon={faQuoteLeft}
              color="#D9D9D9"
              style={{ marginLeft: "-23rem", marginTop: "2rem" }}
            />
            <p>
              Je constate depuis un certain temps
              <br />
              mes clients se font livrer leur médicaments par
              <br />
              flashExpress de plus en plus,
              <br />
              et cela est un signe que c’est un bon service.
            </p>
          </div>
        </ContentThree>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 2rem;
  background: #292d31;
  display: flex;
  gap: 2rem;
  padding: 1rem;
  flex-direction: column;

  h4 {
    padding-top: 30px;
    text-align: center;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 49px;
    color: #ffffff;
  }
`;

const Content = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 1040px) {
    flex-direction: column;
  }
`;

const ContentOne = styled.div`
  img {
    width: 212px;
  }

  div {
    background: #ffffff;
    border-radius: 43px;
    width: 100%;
    height: auto;
    padding: 1rem;
  }

  div h6 {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 33px;
    color: #292d31;
  }

  /*div img {
        margin-left: 170px;
        margin-top: 30px;
    }*/

  div p {
    color: #292d31;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 25px;
  }
`;

const ContentTwo = styled.div`
  img {
    width: 212px;
  }

  div {
    background: #ffffff;
    border-radius: 43px;
    width: 100%;
    height: auto;
    padding: 1rem;
  }

  div h6 {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 33px;
    color: #292d31;
  }

  /*div img {
        margin-left: 140px;
        margin-top: 20px;
    }*/

  div p {
    color: #292d31;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 25px;
  }
`;

const ContentThree = styled.div`
  img {
    width: 212px;
  }

  div {
    background: #ffffff;
    border-radius: 43px;
    width: 100%;
    height: auto;
    padding: 1rem;
  }

  div h6 {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 33px;
    color: #292d31;
  }

  /*div img {
        margin-left: 170px;
        margin-top: 10px;
    }*/

  div p {
    color: #292d31;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 25px;
  }
`;

export default TestimonialSection;
