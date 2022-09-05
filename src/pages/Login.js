import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    reset();

    PostForm(data);
  };

  const [data, setData] = useState({
    roleCompte: "",
    civilite: "",
    prenom: "",
    nom: "",
    email: "",
    password: "",
    telephone: "",
    adresse: "",
    dateOuverture: "",
    disponibilite: "",
  });

  function PostForm(data) {
    const url = "http://127.0.0.1:8000/api/register";

    Axios.post(url, data)
      .then((res) => {
        console.log(res);

        navigate("/auth");
      })
      .catch((err) => console.log(err));
  }

  return (
    <Wrapper>
      <HeaderForm>
        <h4>Creez votre compte</h4>
      </HeaderForm>
      <ContentForm>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group1">
            <label htmlFor="Compte">Type de compte</label>
            <input
              type="radio"
              id="client"
              name="roleCompte"
              value="client"
              {...register("roleCompte", { required: true })}
            />
            <label htmlFor="client" className="client">
              Client
            </label>
            <input
              type="radio"
              id="livreur"
              name="roleCompte"
              value="livreur"
              {...register("roleCompte", { required: true })}
            />
            <label htmlFor="livreur" className="livreur">
              Livreur
            </label>
          </div>
          <div className="form-group2">
            <label htmlFor="Name">Personne</label>
            <select
              className="form-select"
              name="civilite"
              {...register("civilite", { required: true })}
            >
              <option value="monsier">Mr</option>
              <option value="madame">Mme</option>
            </select>
            <div className="Input">
              <input
                type="text"
                className="form-control"
                id="Firstame"
                name="prenom"
                placeholder="Prenom"
                {...register("prenom", { required: true })}
              />
              <small className="validate">
                {errors.prenom && (
                  <span className="error">Le prenom est obligatoire</span>
                )}
              </small>
            </div>
            <div className="para">
              <input
                type="text"
                className="form-control"
                id="Lastname"
                name="nom"
                placeholder="Nom"
                {...register("nom", { required: true })}
              />
              <small className="validate">
                {errors.nom && (
                  <span className="error">Le nom est obligatoire</span>
                )}
              </small>
            </div>
          </div>
          <div className="form-group3">
            <div className="adresse">
              <label htmlFor="Email1">Adresse Email</label>
              <input
                type="email"
                className="form-control"
                id="Email1"
                name="email"
                placeholder="nom@domaine.com"
                {...register("email", { required: true })}
              />
              <small className="validate">
                {errors.email && (
                  <span className="error">L'email est obligatoire</span>
                )}
              </small>
            </div>
            <div className="motpass">
              <label htmlFor="Password1">Mot de passe</label>
              <input
                type="password"
                className="form-control"
                id="Password1"
                name="password"
                placeholder="Mot de passe"
                {...register("password", { required: true })}
              />
              <small className="validate">
                {errors.password && (
                  <span className="error">Le mot de passe est obligatoire</span>
                )}
              </small>
            </div>
          </div>
          <div className="form-group4">
            <label htmlFor="Phone">Numero de telephone</label>
            <input
              type="text"
              className="form-control"
              id="Phone"
              name="telephone"
              placeholder="+33 6 XX XX XX XX"
              {...register("telephone", { required: true })}
            />
            <small className="validate">
              {errors.telephone && (
                <span className="error">
                  Le numero de telephone est obligatoire
                </span>
              )}
            </small>
          </div>
          <div className="form-group8">
            <label htmlFor="Dispo">Disponibilite</label>
            <input
              type="radio"
              id="bool"
              name="disponibilite"
              value="1"
              {...register("disponibilite", { required: true })}
            />
            <label htmlFor="client" className="client">
              Oui
            </label>
            <input
              type="radio"
              id="bool"
              name="disponibilite"
              value="0"
              {...register("disponibilite", { required: true })}
            />
            <label htmlFor="livreur" className="livreur">
              Non
            </label>
          </div>
          <div className="form-group6">
            <input
              type="checkbox"
              id="use"
              name="use"
              {...register("use", { required: true })}
            />
            <label for="use">
              J’accepte les termes et conditions d’utilisation
            </label>
          </div>
          <FooterForm>
            <div className="One">
              <button type="submit">Creer un compte</button>
            </div>
            <div className="buttonTwo">
              <button type="button" onClick={() => reset()}>
                Effacer
              </button>
            </div>
          </FooterForm>
        </form>
      </ContentForm>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1049px;
  height: 1296px;
  margin-left: 372px;
  margin-top: 110px;
`;
const HeaderForm = styled.div`
  width: 1049px;
  height: 109px;
  background: #f2a401;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  h4 {
    margin: 0;
    padding: 0;
    width: 314px;
    height: 33px;
    margin-left: 70px;
    padding-top: 40px;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 33px;
    color: #ffffff;
  }
`;

const ContentForm = styled.div`
  form div.form-group1 label {
    width: 159px;
    height: 21px;
    margin-left: 70px;
    margin-top: 40px;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    color: #292d31;
  }

  form div.form-group1 input[type="radio"] {
    margin-left: 50px;
  }

  form div.form-group1 label.client {
    margin-left: 15px;
    margin-top: 40px;
  }

  form div.form-group1 label.livreur {
    margin-left: 15px;
    margin-top: 40px;
  }

  form div.form-group2 label {
    width: 153px;
    height: 21px;
    margin-left: 70px;
    margin-top: 40px;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    color: #292d31;
  }

  div select.form-select {
    width: 232px;
    height: 48px;
    background: #ffffff;
    border: 0.5px solid rgba(0, 0, 0, 0.5);
    margin-left: 70px;
    margin-top: 40px;
  }

  form div.form-group2 input[type="text"] {
    width: 320px;
    height: 48px;
    margin-left: 70px;
    margin-top: 40px;
    background: #ffffff;
    border: 0.5px solid rgba(0, 0, 0, 0.5);
  }

  form div.form-group2 div {
    margin-left: 240px;
  }

  form div.form-group2 div.Input {
    margin-top: -88px;
  }

  form div.form-group2 div.para {
    margin-left: 570px;
    margin-top: -112px;
  }

  form div.form-group3 label {
    width: 153px;
    height: 21px;
    margin-left: 70px;
    margin-top: 40px;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    color: #292d31;
  }

  form div.form-group3 input[type="email"] {
    width: 320px;
    height: 48px;
    margin-left: 70px;
    margin-top: 20px;
    background: #ffffff;
    border: 0.5px solid rgba(0, 0, 0, 0.5);
  }

  form div.form-group3 input[type="password"] {
    width: 320px;
    height: 48px;
    margin-left: 70px;
    margin-top: 20px;
    background: #ffffff;
    border: 0.5px solid rgba(0, 0, 0, 0.5);
  }

  form div.form-group3 div.address {
    margin-top: -88px;
  }

  form div.form-group3 div.motpass {
    margin-left: 330px;
    margin-top: -154px;
  }

  form div.form-group4 label {
    width: 215pxpx;
    height: 21px;
    margin-left: 70px;
    margin-top: 40px;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    color: #292d31;
  }

  form div.form-group4 input[type="text"] {
    width: 320px;
    height: 48px;
    margin-left: 70px;
    margin-top: 20px;
    background: #ffffff;
    border: 0.5px solid rgba(0, 0, 0, 0.5);
  }

  form div.form-group6 {
    margin-top: -20px;
  }

  form div.form-group6 label {
    width: 215pxpx;
    height: 21px;
    margin-left: 18px;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #292d31;
  }

  form div.form-group6 input[type="checkbox"] {
    width: 34px;
    height: 25px;
    margin-left: 70px;
    margin-top: 40px;
    background: #eff1f5;
    border: 1px solid #ffffff;
    border-radius: 3px;
  }

  form div.form-group8 label {
    width: 215pxpx;
    height: 21px;
    margin-left: 68px;
    margin-top: 40px;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 16px;
    color: #292d31;
  }

  form div.form-group8 input[type="radio"] {
    margin-left: 50px;
  }

  form div.form-group8 label.client {
    margin-left: 15px;
  }

  form div.form-group8 label.livreur {
    margin-left: 15px;
  }

  div small.validate {
    color: red;
    margin-left: 70px;
  }
`;

const FooterForm = styled.div`
  width: 1049px;
  height: 109px;
  margin-top: 30px;
  background: #f2a401;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  div.One {
    margin-left: 68px;
    padding-top: 25px;
  }

  div.One button[type="submit"] {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #292d31;
    background: #ffffff;
    border: 2px solid #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    width: 233px;
    height: 56px;
    cursor: pointer;
  }

  div.buttonTwo {
    margin-left: 328px;
    margin-top: -55px;
  }

  div.buttonTwo button[type="button"] {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #292d31;
    background: #ffffff;
    border: 2px solid #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    width: 233px;
    height: 56px;
    cursor: pointer;
  }
`;

export default Login;
