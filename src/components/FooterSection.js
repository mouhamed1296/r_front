import React from "react";
import styled from "styled-components";

const FooterSection = () => {
  return (
    <>
      <Wrapper>
        <TextContent>
          <p>
            <img src="/images/logoFooter.png" alt="logoFooter" />
          </p>
          <div>
            <p>
              Abonnez-vous à notre NewsLetters
              <br />
              pour ne pas rater les offres exceptionnelles
            </p>
            <label>
              <input type="text" placeholder="Entrez votre email" />
            </label>
            <button>Envoyer</button>
          </div>
          <section>
            <div>
              <h5>flashExpress</h5>
              <h6>
                est disponible en application mobile
                <br />
                Téléchargez gratuitement sur
              </h6>
            </div>
            <div className="download">
              <article>
                <img src="/images/appStore.png" alt="appStore" />
                <p>
                  Download on the
                  <br />
                  AppleStore
                </p>
              </article>
              <article className="two">
                <img src="/images/googlePlay.png" alt="googlePlay" />
                <p>
                  GET IT ON
                  <br />
                  PlayStore
                </p>
              </article>
            </div>
          </section>
        </TextContent>
        <ContentSocial>
          <div className="navigation">
            <h6>Navigation</h6>
            <ul>
              <li>
                <a href="/">Accueil</a>
              </li>
              <li>
                <a href="/Nos Services">Nos Services</a>
              </li>
              <li>
                <a href="/A propos">A propos</a>
              </li>
              <li>
                <a href="/Contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="support">
            <h6>Support</h6>
            <ul>
              <li>
                <a href="/">@flashExpress@support.com</a>
              </li>
              <li>
                <a href="/">Telephone: +(221)77 456 89 70</a>
              </li>
              <li>
                <a href="/">Fixe: +(221)33 333 55 66</a>
              </li>
              <li>
                <a href="/">
                  Localisation: PG5J+V8J, Voie de degagement N, Dakar
                </a>
              </li>
            </ul>
          </div>
          <div className="contact">
            <h6>Retrouvez-nous sur</h6>
            <p className="para1">
              <img src="/images/Twitter.png" alt="Twitter" />
              <p>@flashExpress</p>
            </p>
            <p className="para2">
              <img src="/images/Facebook.png" alt="Facebook" />
              <p>flashExpress_lofficiel</p>
            </p>
            <p className="para3">
              <img src="/images/Instagram.png" alt="Instagram" />
              <p>flashExpress_lofficiel</p>
            </p>
            <p className="para4">
              <img src="/images/LinkedIn.png" alt="LinkedIn" />
              <p>flashExpress_lofficiel</p>
            </p>
          </div>
        </ContentSocial>
      </Wrapper>
      <Note>
        <p>Copyrigth © 2022 - flashExpress. Tous droits réservés.</p>
      </Note>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 2rem;
  background: #eff1f5;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const TextContent = styled.div`
  padding: 1rem;
  p img {
    width: 150px;
    height: 75px;
  }

  div {
    width: 100%;
    height: auto;
  }

  div p {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    color: #292d31;
  }

  div input {
    width: 100%;
    background: #ffffff;
    border-radius: 14px;
    padding: 0.5rem;
    border: 1px solid #eff1f5;
    color: #d9d9d9;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
  }

  div button {
    background: #f2a401;
    border-radius: 14px;
    border: 1px solid #f2a401;
    font-family: "Epilogue";
    color: #ffffff;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    padding: 0.5rem;
    line-height: 18px;
    margin-left: 1rem;
    margin-bottom: 1rem;
  }

  section {
    display: flex;
    @media (max-width: 1040px) {
      flex-direction: column;
    }
  }

  section h5 {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    color: #f2a401;
  }

  section h6 {
    // height: 14px;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    color: #292d31;
  }

  section div.download {
    display: flex;
    gap: 1rem;
  }

  section article {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border: 2px solid #000000;
    border-radius: 11px;
    width: 100%;
    height: auto;
    padding: 0.5rem;
  }

  section article p {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 8px;
    color: #000000;
  }

  section article.two {
  }
`;

const ContentSocial = styled.div`
  padding: 1rem;
  display: flex;
  gap: 1rem;
  @media (max-width: 1040px) {
    flex-direction: column;
  }
  div.navigation {
    width: 100%;
    height: auto;
  }

  div.navigation h6 {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    color: #000000;
  }

  div.navigation ul {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #292d31;
    list-style: none;
  }

  div.navigation ul li {
    margin-top: 6px;
  }

  div.navigation ul li a {
    text-decoration: none;
    color: #292d31;
  }

  div.support {
    width: 100%;
    height: auto;
  }

  div.support h6 {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    color: #000000;
  }

  div.support ul {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #292d31;
    list-style: none;
  }

  div.support ul li {
    margin-top: 6px;
  }

  div.support ul li a {
    text-decoration: none;
    color: #292d31;
  }

  div.contact {
    width: 100%;
    height: auto;
  }

  div.contact h6 {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    color: #000000;
  }

  div.contact img {
    width: 30.67px;
    height: 27.65px;
    cursor: pointer;
  }

  div.contact p {
    color: #292d31;
  }
`;

const Note = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 1rem;
  background-color: #eff1f5;

  p {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    color: #000000;
  }
`;

export default FooterSection;
