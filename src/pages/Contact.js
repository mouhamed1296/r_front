import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Wrapper>
      <ColorContact >
        <p>Nous contacter</p>
      </ColorContact>
      <CartCoordoonnees>
        <div className='telephone'>
          <p className='numPhone'>Par Telephone:</p>
          <p>+33 6 78 90 12 34<br/><br/>+221 546 00 00</p>
        </div>
        <div className='mail'>
          <p className='support'>Par e-mail :</p>
          <p>flashExpress@support.com</p>
        </div>
        <div className='watsapp'>
          <p className='numero'>Par watsApp :</p>
          <p>National<br/><br/>+(221)77 456 89 70</p>
        </div>
      </CartCoordoonnees>
      <FormulaireContact>
        <form>
          <h6 id='titre'>Nous contacter</h6>
          <div className='contact-form'>
            <div className="nomUser">
              <label htmlFor="exampleInputName">Nom</label>
              <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" />
            </div>
            <div className="mailUser">
              <label htmlFor="exampleInputEmail">E-mail</label>
              <input type="text" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" />
            </div>
            <div className="telUser">
              <label htmlFor="exampleInputEmail">Telephone</label>
              <input type="text" className="form-control" id="exampleITelephone" aria-describedby="emailHelp" />
            </div>
            <div className="msgUser">
              <label htmlFor="exampleInputMessage">Votre message</label>
              <textarea className="texta" name="message" rows="07" cols="40"></textarea>
            </div>
            <div className="envoie">
              <button type='submit'>Envoyer</button>
            </div>
          </div>
        </form>
      </FormulaireContact>
    </Wrapper>
  );
}

const Wrapper = styled.div`
width: 1281px;
height: 1617px;`;

const ColorContact = styled.div`
  width: 149%;
  height: 18%;
  margin-top: 8rem;
  background: #F2A401;
  
  p {
    font-family: 'Epilogue';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 33px;
    text-align: center;
    color: #FFFFFF;
    padding-top: 125px;
}`;

const CartCoordoonnees = styled.div`
  div.telephone {
    margin-top: 35px;
    margin-left: 430px;
    width: 272px;
    height: 150px;
    background: #E7EAF0;
    border-radius: 5px;
  }
  div.telephone p.numPhone {
    width: 166px;
    height: 21px;
    padding-top: 20px;
    margin-left: 25px;
    font-family: 'Epilogue';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    color: #000000;
  }
  div.telephone p {
    font-family: 'Epilogue';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #000000;
    opacity: 0.9;
    margin-left: 20px;
    margin-top: 40px;
    width: 190px;
    height: 16px;
  }

  div.mail {
    margin-top: -148px;
    margin-left: 760px;
    width: 272px;
    height: 150px;
    background: #E7EAF0;
    border-radius: 5px;
  }
  div.mail p.support {
    width: 166px;
    height: 21px;
    padding-top: 20px;
    margin-left: 25px;
    font-family: 'Epilogue';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    color: #000000;
  }
  div.mail p {
    font-family: 'Epilogue';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #000000;
    opacity: 0.9;
    padding-top: 20px;
    margin-left: 25px;
    width: 190px;
    height: 16px;
  }

  div.watsapp {
    margin-top: -150px;
    margin-left: 1090px;
    width: 272px;
    height: 150px;
    background: #E7EAF0;
    border-radius: 5px;
  }
  div.watsapp p.numero {
    width: 166px;
    height: 21px;
    padding-top: 20px;
    margin-left: 25px;
    font-family: 'Epilogue';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    color: #000000;
  }
  div.watsapp p {
    font-family: 'Epilogue';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #000000;
    opacity: 0.9;
    padding-top: 20px;
    margin-left: 25px;
    width: 190px;
    height: 16px;
  }
`;

const FormulaireContact = styled.div`

form {
  background: #E7EAF0;
  width: 998px;
  height: 991px;
  margin-left: 430px;
  margin-top: 78px;
  
  h6 {
    width: 248px;
    height: 33px;
    padding-top: 50px;
    margin-left: 158px;
    font-family: 'Epilogue';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 33px;
    color: #292D31;
  }

  div.contact-form label {
    font-family: 'Epilogue';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 25px;
    color: #292D31;
    height: 60px;
    widht: 40px;
    margin-left: 158px;
    margin-top: 40px;
  }

  div.contact-form input {
    border: 0.5px solid rgba(0, 0, 0, 0.5);
    width: 516px;
    height: 62px;
    margin-left: 154px;
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

  div.contact-form textarea {
    margin-left: -179px;
    margin-top: 40px;
    width: 512px;
    // height: 190px;
  }

  div.envoie {
    width: 520px;
    height: 80px;
    margin-left: 158px;
    background: #F2A401;
    border: 0.5px solid rgba(0, 0, 0, 0.5);
  }
  div.envoie button {
    font-family: 'Epilogue';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    // color: #FFFFFF;
    border: none;
    // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    // border-radius: 5px;
    width: 233px;
    height: 56px;
    margin-left: 145px;
    margin-top: 10px;
    cursor: pointer;
  `;

export default Contact;
