import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <ColorContact>
        <p>Nous contacter</p>
      </ColorContact>
      <CartCoordoonnees>
        <div className="telephone">
          <p className="numPhone">Par Telephone:</p>
          <p>
            +33 6 78 90 12 34
            <br />
            <br />
            +221 546 00 00
          </p>
        </div>
        <div className="mail">
          <p className="support">Par e-mail :</p>
          <p>flashExpress@support.com</p>
        </div>
        <div className="watsapp">
          <p className="numero">Par watsApp :</p>
          <p>
            National
            <br />
            <br />
            +(221)77 456 89 70
          </p>
        </div>
      </CartCoordoonnees>
      <FormulaireContact>
        <form>
          <h6 id="titre">Nous contacter</h6>
          <div className="contact-form">
            <div className="nomUser">
              <label htmlFor="exampleInputName">Nom</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mailUser">
              <label htmlFor="exampleInputEmail">E-mail</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="telUser">
              <label htmlFor="exampleInputEmail">Telephone</label>
              <input
                type="text"
                className="form-control"
                id="exampleITelephone"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="msgUser">
              <label htmlFor="exampleInputMessage">Votre message</label>
              <textarea
                className="texta"
                name="message"
                rows="07"
                cols="32"
              ></textarea>
            </div>
            <div className="envoie">
              <button type="submit">Envoyer</button>
            </div>
          </div>
        </form>
      </FormulaireContact>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  @media (min-width: 1045px) {
    padding-left: 10rem;
    padding-right: 10rem;
  }
`;

const ColorContact = styled.div`
  width: 100%;
  height: auto;
  margin-top: 4rem;
  background: #f2a401;

  p {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 33px;
    text-align: center;
    color: #ffffff;
  }
`;

const CartCoordoonnees = styled.div`
  div.telephone {
    background: #e7eaf0;
    border-radius: 5px;
    padding: 1rem;
    margin-top: 1rem;
  }
  div.telephone p.numPhone {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    color: #000000;
  }
  div.telephone p {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #000000;
    opacity: 0.9;
  }

  div.mail {
    background: #e7eaf0;
    border-radius: 5px;
    padding: 1rem;
    margin-top: 1rem;
  }
  div.mail p.support {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    color: #000000;
  }
  div.mail p {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #000000;
    opacity: 0.9;
  }

  div.watsapp {
    background: #e7eaf0;
    border-radius: 5px;
    padding: 1rem;
    margin-top: 1rem;
  }
  div.watsapp p.numero {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    color: #000000;
  }
  div.watsapp p {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #000000;
    opacity: 0.9;
  }
`;

const FormulaireContact = styled.div`
  form {
    background: #e7eaf0;
    width: 100%;
    height: auto;
    padding: 1rem;
    margin-top: 1rem;

    h6 {
      font-family: "Epilogue";
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 33px;
      color: #292d31;
    }

    div.contact-form label {
      font-family: "Epilogue";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 25px;
      color: #292d31;
    }

    div.contact-form input {
      border: 0.5px solid rgba(0, 0, 0, 0.5);
      margin-bottom: 1rem;
    }

    div.nomUser label {
      // width: 179px;
      // height: 25px;
      // left: 270px;
      // top: 575px;
      // font-family: 'Epilogue';
      // font-style: normal;
      // font-weight: 400;
      // font-size: 24px;
      // line-height: 25px;
      // color: #292D31;
    }

    div.contact-form .msgUser {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 1rem;
    }

    div.contact-form textarea {
      // height: 190px;
    }

    div.envoie {
      background: #f2a401;
      border: 0.5px solid rgba(0, 0, 0, 0.5);
      padding: 1rem;
    }
    div.envoie button {
      font-family: "Epilogue";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 16px;
      // color: #FFFFFF;
      border: none;
      // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      // border-radius: 5px;
      padding: 0.7rem;
      cursor: pointer;
    }
  }
`;

export default Contact;
